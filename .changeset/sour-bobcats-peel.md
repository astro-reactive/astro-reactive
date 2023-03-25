---
"@astro-reactive/form": minor
"@astro-reactive/demo": patch
---

1. Change the default of `validateOnLoad` property to true, making server-side rendering validation the default behavior for the `Form` component.
1. Update the demo `index.astro` page by removing the `validateOnLoad` property/directive on the example which should still result to server-side rendered validation results.
