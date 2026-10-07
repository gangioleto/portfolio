# Portfólio · Gabriel Angioleto

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/status-em_constru%C3%A7%C3%A3o-00d2ff?style=flat-square)

Meu site pessoal: um lugar para reunir projetos, experiências profissionais e
formas de contato. Estou construindo do zero, uma parte de cada vez, para
praticar Next.js com App Router, TypeScript e Tailwind CSS.

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Página inicial e apresentação |
| `/projetos` | Projetos que desenvolvi |
| `/experiencias` | Experiência profissional e formação |
| `/contato` | Formas de falar comigo |

O cabeçalho é fixo no topo, com fundo desfocado, e destaca o link da página
em que você está.

## Stack

- **Next.js 16** com App Router e React Compiler
- **React 19** e **TypeScript**
- **Tailwind CSS 4**, com as cores do tema definidas em `@theme` no `globals.css`
- Fontes **Space Grotesk** (texto) e **JetBrains Mono** (detalhes), carregadas
  com `next/font`

### Paleta

| Token | Cor | Uso |
| --- | --- | --- |
| `bg` | `#121212` | Fundo |
| `surface` | `#1e1e1e` | Cartões e blocos |
| `fg` | `#e0e0e0` | Texto principal |
| `muted` | `#888888` | Texto secundário |
| `border` | `#333333` | Bordas |
| `accent` | `#00d2ff` | Destaques e links ativos |

## Como rodar

Requisito: Node.js 20 ou mais novo.

```bash
npm install
npm run dev
```

Depois é só abrir [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
npm run build   # gera a versão de produção
npm run start   # roda a versão de produção
npm run lint    # verifica o código com ESLint
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # fontes, cabeçalho e rodapé de todas as páginas
│   ├── globals.css         # Tailwind e tokens de cor/fonte
│   ├── page.tsx            # página inicial
│   ├── projetos/page.tsx
│   ├── experiencias/page.tsx
│   └── contato/page.tsx
└── components/
    ├── Header.tsx          # navegação com link ativo
    └── Footer.tsx          # rodapé com GitHub e LinkedIn
```

## Contato

- LinkedIn: [Gabriel Angioleto](https://www.linkedin.com/in/gabriel-dos-santos-rodrigues-angioleto-02408030b)
- E-mail: [gabriel.angioleto@icloud.com](mailto:gabriel.angioleto@icloud.com)
