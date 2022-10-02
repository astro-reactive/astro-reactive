# Thanks for checking out Astro Reactive Library! 🚀

Hi, explorer! Welcome to a new adventure.

We are trying to build a new library of components and utilities for building reactive user interfaces with [Astro](https://astro.build).

There's a lot of opportunity to contribute. A good start will be to understand what Astro is, and how to set up a basic Astro project. For this, the [Astro website](https://astro.build) and [documentation](https://docs.astro.build/en/getting-started/) are good places to start.

# Contributing

Any contribution is welcome. Feel free to look around to find something that interests you. :)

Maybe add some themes to our form component? Or maybe just improve the README?

The issues page contains some ideas, but they should not limit your contribution.

If you don't find anything there, I'm happy to help you get your contribution in.

You can always [create a new issue](https://github.com/ayoayco/astro-reactive-library/issues/new) for your own idea, [email me (ramon.aycojr+hack@gmail.com)](mailto:ramon.aycojr+hack@gmail.com) or message me on [Twitter (@ayoayco)](https://twitter.com/ayoayco).

# The Astro Reactive Library

This project aims to be a library that developers will use to create reactive UIs with Astro.

Currently, it is made up of [NPM workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces), which are node projects that share a singular root package. It is good to understand the basics of this, but basically, the project will have multiple packages (under the `packages` directory) that share a common root package information.

Packages:
1. [demo](https://github.com/ayoayco/astro-reactive-library/tree/main/demo#readme) - found in the directory `demo`
    - the demo Astro app that we use to test and demonstrate the library features
2. [astro-reactive-form](https://github.com/ayoayco/astro-reactive-library/tree/main/packages/astro-reactive-form#readme) - found in the directory `packages/astro-reactive-form`
    - allows developers to programatically build a Form for Astro
3. [astro-reactive-validator](https://github.com/ayoayco/astro-reactive-library/tree/main/packages/astro-reactive-validator) - found in the directory `packages/astro-reactive-validator`

# Running locally

We mainly use the `demo` app to see changes we make on the packages. Do the following to start hacking:

1. Fork the project then clone to your computer

```
git clone git@github.com:<your-user-name>/astro-reactive-library.git
```

2. Go into the project directory

```
cd astro-reactive-library
```

3. Install the node dependencies

```
npm i
```

4. Run the demo application

```
npm run dev
```

5. Open the demo application on you browser. Browse to the address:

```
https://localhost:3000
```

# Hacking with the packages

As mentioned above, this project involves packages that are intened to be used in Astro applications. The demo app is our way to test and play with the packages.

If you plan to add features or fix bugs that are found in the packages, such as `astro-reactive-form`, you can find the source code for this inside the `packages` directory.

