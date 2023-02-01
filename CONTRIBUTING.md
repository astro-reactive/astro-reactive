![Astro Reactive Library](https://user-images.githubusercontent.com/4262489/193419437-6e437743-47bf-482b-8f7e-de3c7f5285f8.png)

# Hi, explorer! 🚀

Thanks for checking out the Astro Reactive Library! Welcome to a new adventure.

This is a library of components and utilities for building reactive user interfaces with [Astro](https://astro.build)--a modern web framework.

There's a lot of opportunity to contribute. A good start will be to understand what Astro is, and how to set up a basic Astro project. For this, the [Astro website](https://astro.build) and [documentation](https://docs.astro.build/en/getting-started/) are good places to start.

# Contributing

Any contribution is welcome. Feel free to look around to find something that interests you. :)

The [issues page](https://github.com/astro-reactive/astro-reactive/issues?q=is%3Aopen+is%3Aissue+label%3A%22accepting+PRs%22) contains some ideas, but they should not limit your contribution.

If you don't find anything there, we are happy to help you get your contribution in.

You can always [create a new issue](https://github.com/astro-reactive/astro-reactive/issues/new/choose) for your own idea, [post on our discussions](https://github.com/astro-reactive/astro-reactive/discussions) or join our [Discord](https://discord.gg/fkpkKdPJ).

# The Astro Reactive Library

This project aims to be a library that developers will use to create reactive UIs with Astro.

The project is made up of [NPM workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces), which are node projects that share a singular root package. It is good to understand the basics of this, but basically, the project will have multiple packages (under the `packages` directory) that share a common root package information.

We are using [Turborepo](https://turbo.build/repo) as our monorepo build system.

Packages:

1. [demo](https://github.com/astro-reactive/astro-reactive/tree/main/apps/demo) in the directory `apps/demo`
   - Astro web application that we use to test and demonstrate the library components
1. [form](https://github.com/astro-reactive/astro-reactive/tree/main/packages/form) in the directory `packages/form`
   - component that allows developers to programmatically build a form
1. [validator](https://github.com/astro-reactive/astro-reactive/tree/main/packages/validator) in the directory `packages/astro-reactive-validator`
   - component that allows developers to set up validators for their forms easily
1. [docs](https://github.com/astro-reactive/astro-reactive/tree/main/apps/docs) - in the directory `apps/docs`
   - Astro website for the library's extensive documentation
1. [landing-page](https://github.com/astro-reactive/astro-reactive/tree/main/apps/landing-page) - in the directory `apps/landing-page`

   - Astro website for the library's introductory landing page

   [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/astro-reactive/astro-reactive.git)

# Running locally

We mainly use the `demo` app to see changes we make on the packages. Do the following to start hacking:

1. Fork the project then clone to your computer

```
git clone git@github.com:<your-user-name>/astro-reactive.git
```

2. Go into the project directory

```
cd astro-reactive
```

3. Install the node dependencies

```
npm i
```

4. Run the demo application

```
npm start
```

5. Open the demo application on you browser. Browse to the address

```
https://localhost:3000
```

# Applications

We also maintain the documentation website and the project landing page in this repository. The source for these applications is found in the `apps` directory.

You can start the dev server for the docs and landing-page websites with the following commands:

```
npm run docs
```

```
npm run landing-page
```

# Running the linter and tests

Please run the linter and tests before creating a PR to avoid delays in PR reviews. Fix all linting errors or failing tests whey you run the following commands.

```
npm run lint
```

```
npm test
```

✨ _HINT: Some linting errors could be automatically fixed with a command_

```
npm run lint:fix
```

# Hacking with the packages

As mentioned above, this project involves packages that are intended to be used in Astro applications. The demo app is our way to test and play with the packages.

If you plan to add features or fix bugs that are found in the packages, such as `@astro-reactive/form`, you can find the source code for this inside the `packages` directory.

Thank you again for your interest in contributing!

# Next Actions

✍️ Read on [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/); you'll see this used around issues, PRs, and commit messages

🏘️ Read our [community guidelines](https://github.com/astro-reactive/astro-reactive/blob/main/CODE_OF_CONDUCT.md)

📝 Check the [discussion board](https://github.com/astro-reactive/astro-reactive/discussions) for announcements or post your messages and questions

💬 Hang-out with the team on our [Discord](https://discord.gg/fkpkKdPJ) to share feedback, get support, or just have some laughs over memes 😅

🛠️ Create a [new issue](https://github.com/astro-reactive/astro-reactive/issues/new/choose) for bugs found or improvement ideas

<!--

## Play around examples:

  <a href="https://stackblitz.com/edit/github-ze9ebb-tthuka?file=package.json,src%2Fpages%2Findex.astro">
    <img
      src="https://developer.stackblitz.com/img/open_in_stackblitz_small.svg"
      alt="Play around in Stackblitz"
    />
  </a>
  <a href="https://codesandbox.io/s/astro-reactive-library-u72dgj?file=/src/pages/index.astro">
    <img
      src="https://img.shields.io/badge/Open%20in-CodeSandbox-040404?logo=codesandbox"
      alt="CodeSandbox"
    />
  </a>

-->