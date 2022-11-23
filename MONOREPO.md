# Monorepo Guide
This project is a monorepo configured with Turborepo + NPM workspace. Here are some common development scripts.

## Scripts
To clean and remove files, such as `node_modules`, `dist`, `.turbo` in every workspace.
```bash
npm run clean 
```

Filtering workspaces. For more detail [https://turbo.build/repo/docs/core-concepts/monorepos/filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering).
```bash
# Append the `npm run` command with  `-- --filter=<workspace>`

# with workspace name
npm run test -- --filter=validator

# Or equivalent
npm run test -- --filter=packages/validator
```

To run tests.
```bash
# Run all tests in every workspace.
npm run test

# Run test in selected workspace.
npm run test -- --filter=<workspace>

npm run test -- --filter=form

# Run test in watch mode. Can be filtered too.
npm run test:watch -- --filter=<workspace>
```

To lint workspaces.
```bash
# Lint all workspaces. Can be filtered.
npm run lint

# Lint and fix.
npm run lint:fix
```

To build workspaces.
```bash
# Build all workspaces. Can be filtered.
npm run build
```

To typecheck workspaces.
```bash
# Typecheck all workspaces. Can be filtered.
npm run check
```