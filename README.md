# Allowance Monorepo

This is the Allowance monorepo, built with Turborepo.

## Apps & Packages

### Apps ###
- `app`: Allowance App / User Dashboard built with [Next.js](https://nextjs.org/)
- `web`: Allowance Marketing Site and Sign up flow built with [Next.js](https://nextjs.org/)

### Packages ###
- `bash-design`: Allowance Design System built with [Panda CSS](https://panda-css.com/)
- `bash-ui`: Allowance UI Kit which uses Bash Design and some components from [Radix UI](https://www.radix-ui.com/)
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### External Tools

The following external libraries are used:

- [Legend State](https://www.legendapp.com/open-source/state/) for state management
- [React Hook Form](https://react-hook-form.com) for form management

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Design System

If you make changes to tokens, recipes or configs with Panda CSS, you need to run codegen for the changes to take affect. A script to set this up has been created already.

`pnpm prepare`

### Build

To build all apps and packages, run the following command:

```
cd allowance
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd allowance
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd allowance
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
