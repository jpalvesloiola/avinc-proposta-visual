#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

hosting="${SITES_PROJECT_ROOT}/dist/.openai/hosting.json"
vercel_worker="${SITES_PROJECT_ROOT}/.vercel/output/functions/__server.func/index.mjs"

[[ -f "${hosting}" ]] || {
  echo "Missing packaged Sites manifest: dist/.openai/hosting.json" >&2
  exit 66
}

[[ -f "${vercel_worker}" ]] || {
  echo "Missing Vercel server function: .vercel/output/functions/__server.func/index.mjs" >&2
  exit 66
}

node --input-type=module - "${vercel_worker}" "${hosting}" <<'NODE'
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const [workerPath, hostingPath] = process.argv.slice(2);

JSON.parse(await readFile(hostingPath, "utf8"));

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set(
  "sites-validation",
  `${process.pid}-${Date.now()}`
);

const worker = await import(workerUrl.href);

if (
  !worker.default ||
  typeof worker.default.fetch !== "function"
) {
  throw new Error(
    "Vercel server function must have an ESM default export with fetch(request, env, ctx)"
  );
}
NODE

echo "Validated Sites artifact: Vercel server function and hosting manifest are present."
