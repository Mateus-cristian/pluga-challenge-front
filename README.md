# Sobre o desafio

Este projeto foi desenvolvido a partir de um desafio técnico da Pluga, onde o objetivo era migrar uma aplicação React + Vite simples e pouco organizada para uma stack moderna com Next.js e TypeScript, aplicando boas práticas de arquitetura, testes e automação.

O código original era uma aplicação web baseada em React, que listava apps integrados à Pluga, com busca, paginação e um modal de histórico. Porém, estava concentrado em um único módulo, sem organização ou boas práticas.

**Minha missão foi:**

- Migrar para Next.js
- Migrar para TypeScript
- Centralizar o estado com Context Hooks
- Escrever testes com Jest
- Configurar CI/CD com GitHub Actions
- Escrever um README completo

# Estrutura de pastas adotada

```
src/
  app/           # Rotas e páginas do Next.js
  modules/        # Domínios do sistema, cada módulo com seus componentes, hooks, contextos, serviços e tipos
  shared/         # Componentes, hooks e utilitários reutilizáveis entre módulos
  config/         # Configurações globais (ex: axios, variáveis de ambiente)
tests/
  integrations/
    components/   # Testes de componentes do domínio integrations
    context/      # Testes de contextos do domínio integrations
    services/     # Testes de serviços do domínio integrations
    hooks/        # Testes de hooks do domínio integrations
    types/        # Testes de tipos do domínio integrations
```

## Tecnologias

- **Framework principal:** [Next.js](https://nextjs.org)
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

## Requisitos de ambiente

- **Node.js:** versão recomendada >= 20.x
- **npm:** versão recomendada >= 9.x

## Como rodar localmente

Clone este repositório e, com o projeto em sua máquina, execute:

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

O foco da entrega foi a organização do projeto, buscando baixo acoplamento, alta coesão e fácil manutenção. Todo o código foi revisado para garantir qualidade, acessibilidade e escalabilidade.

Feito com carinho e muito Typescript 💙🚀!
