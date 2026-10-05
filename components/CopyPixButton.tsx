"use client";

export default function CopyPixButton() {
  async function copyPix() {
    await navigator.clipboard.writeText("doe@avidanocerrado.com");
  }

  return (
    <button
      type="button"
      className="copy-pix-button"
      onClick={copyPix}
    >
      Copiar
    </button>
  );
}