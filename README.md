# Pluga Challenge Front

Este repositório contém minha solução para o desafio técnico front-end da [Pluga](https://pluga.co).
Desenvolvi uma aplicação web moderna, organizada e testada, seguindo todos os requisitos propostos.

## Sobre o projeto

- **Framework:** [Next.js](https://nextjs.org)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org)
- **Estado global:** [Context API](https://react.dev/reference/react/useContext) com hooks customizados
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Testes:** [Jest](https://jestjs.io) + [Testing Library](https://testing-library.com/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions) e integração pronta para Vercel
- **Acessibilidade (a11y):** Telas e componentes desenvolvidos com foco em acessibilidade, navegação por teclado, ARIA, feedback visual e boas práticas do WCAG.
- **Mobile First:** Todas as telas e componentes foram desenhados e implementados priorizando responsividade e experiência mobile.
- **Branches:**
  - `staging`: branch de testes/homologação, com deploy preview.
    - [https://pluga-challenge-front-staging.vercel.app/](https://pluga-challenge-front-staging.vercel.app/)
  - `main`: branch de produção, com deploy final.
    - [https://pluga-challenge-front-main.vercel.app/](https://pluga-challenge-front-main.vercel.app/)
- **Organização:** Código modular, baixo acoplamento e alta coesão

## Funcionalidades

- Busca de aplicativos por nome
- Paginação responsiva e acessível
- Modal com detalhes do app e histórico dos últimos visualizados
- Persistência do histórico no localStorage
- Skeleton de loading e feedback para estados vazios
- Página de erro 404 e 500 personalizada

## Como rodar localmente

```sh
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Testes

Execute todos os testes com:

```sh
npm run test
```

Os testes cobrem busca, listagem, paginação, modal, contexto, histórico e acessibilidade.

## CI/CD

- O projeto possui workflow de CI/CD em [`.github/workflows/pr-checks.yml`](.github/workflows/pr-checks.yml) e [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml).
- Cada push ou PR executa lint, type-check, build e testes.
- Deploy automático na Vercel ao fazer merge na branch principal.

## Considerações

Todo o trabalho feito por mim, seguiu boas práticas de arquitetura, acessibilidade e testes. O projeto está pronto para manutenção, evolução e fácil integração com times de produto.

Feito com carinho e muito Typescript 💙🚀!
