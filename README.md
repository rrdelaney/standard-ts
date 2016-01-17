# TypeScript Standard Style

### One Style to Rule Them All

No decisions to make. No `tslint.json` files to manage. It just works.

This module saves you (and others!) time in two ways:

- **No configuration.** The easiest way to enforce consistent style in your project. Just
  drop it in.
- **Catch style errors before they're submitted in PRs.** Saves precious code review time
  by eliminating back-and-forth between maintainer and contributor.

## Install

```bash
npm install standard-ts
```

## Rules

- **2 spaces** – for indentation
- **Single quotes for strings** – except to avoid escaping
- **No unused variables** – this one catches *tons* of bugs!
- **No semicolons** – [It's][1] [fine.][2] [Really!][3]
- **Never start a line with `(` or `[`**
  - This is the **only** gotcha with omitting semicolons – *automatically checked for you!*
  - [More details][4]
- **Space after keywords** `if (condition) { ... }`
- **Space after function name** `function name (arg) { ... }`
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.
- Always handle the node.js `err` function parameter
- Always prefix browser globals with `window` – except `document` and `navigator` are okay
  - Prevents accidental use of poorly-named browser globals like `open`, `length`,
    `event`, and `name`.