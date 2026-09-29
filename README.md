# Site do IFVET Patologia Diagnóstica

Site publicado em **https://www.ifvet.com.br** pelo GitHub Pages.

## Como o repositório está organizado

| Onde | O que é |
| --- | --- |
| `fonte/` | **Código-fonte do site** (React + Vite). É aqui que se fazem as alterações. |
| raiz (`index.html`, `assets/`, páginas de exame…) | Site já gerado, que o GitHub Pages publica. **Não edite à mão**: é recriado a cada publicação. |
| `.github/workflows/publicar.yml` | Publicação automática. |

## Como alterar um texto, prazo, telefone ou pergunta

Quase todo o conteúdo está em **`fonte/src/dados.js`**: contatos, horários,
prazos, exames, orientações de envio, glossário, equipe, depoimentos e
perguntas frequentes. Os textos de SEO de cada página (título e descrição que
aparecem no Google) estão em `fonte/src/rotas.js`.

Dá para editar direto pelo site do GitHub (abrir o arquivo → ícone de lápis →
"Commit changes"). Ao salvar no branch `main`, o GitHub Actions gera o site e
publica sozinho em cerca de 2 minutos. Acompanhe na aba **Actions**.

## Como rodar no computador

Precisa do Node.js 22 ou mais novo.

```bash
cd fonte
npm install
npm run dev        # abre o site em modo de desenvolvimento
npm run build      # gera o site final em fonte/dist
npm run publicar   # gera e copia o site para a raiz do repositório
```

## Páginas

- `/` — página inicial
- `/citologia-veterinaria/`, `/histopatologia-veterinaria/`,
  `/biopsia-transcirurgica/`, `/necropsia-veterinaria/` — uma página por exame
- `404.html` — página para endereços que não existem

Cada página é gerada já com o HTML pronto (bom para o Google e para abrir
rápido), e o `sitemap.xml` é atualizado a cada publicação.
