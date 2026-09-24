# Como executar o protótipo da AVINC no VS Code

Este pacote contém o código-fonte completo do protótipo **AVINC — Proposta Visual Conceitual**.

## Requisito

- Node.js 22.13.0 ou mais recente.

Para conferir a versão instalada, abra o terminal do VS Code e execute:

```bash
node --version
```

## Executar localmente

1. Extraia o arquivo ZIP.
2. No VS Code, escolha **Arquivo > Abrir Pasta** e selecione a pasta extraída.
3. Abra **Terminal > Novo Terminal**.
4. Instale as dependências:

```bash
npm ci
```

5. Inicie o site:

```bash
npm run dev:local
```

6. Abra no navegador o endereço exibido no terminal — normalmente `http://localhost:5173`.

Para encerrar o servidor, pressione `Ctrl+C` no terminal.

## Gerar e testar a versão de produção

```bash
npm run build:local
npm run start:local
```

## Onde editar

- Páginas: `app/`
- Componentes compartilhados: `components/`
- Estilos e cores: `app/globals.css`
- Arquivos públicos: `public/`

## Rotas incluídas

- `/`
- `/sobre`
- `/projetos`
- `/projetos/faca-chuva-ou-faca-sol`
- `/guia`

Observação: este é o código do protótipo publicado no ChatGPT Sites. Ele pode ser executado e alterado no VS Code, mas não é um tema importável diretamente no Wix.
