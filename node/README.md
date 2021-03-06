## Pluggable [ESLint](http://eslint.org/docs/about/) [config](http://eslint.org/docs/developer-guide/shareable-configs) for [Node.js](nodejs.org) that you can import, extend and override

### Node.js: Safety Checks and Best Practices with a bias toward code concision / brevity

#### Usage

In your js project directory:

```shell
npm install --save-dev eslint-config-node
```

And in your `.eslintrc.yaml`:

```yaml
---
  extends:
    - node
```

Alternatively, in your `.eslintrc.js` or `.eslintrc.json`:

```json
{
  "extends": ["node"]
}
```

To add a git-hook to your commits, consider using [husky](https://github.com/typicode/husky)

```shell
npm install --save-dev husky
```

And in your `package.json`:

```json
  "scripts": {
    "precommit": "eslint ."
  }
```

---

#### Config

This config is biased and opinionated, and errs on the side of too many rules instead of too few. Think of this as a superset of your repo's lint config, and discard what you don't like in it. It's easy to override and disable the rules you find inconvenient.

```yaml
  env:
    node: true
```

[enables](http://eslint.org/docs/user-guide/configuring#specifying-environments) node.js features and global variables

```yaml
  extends: esnext
```

includes config and rules from [eslint-config-esnext](https://github.com/kunalgolani/eslint-config/tree/master/esnext)

```yaml
  rules:
```

selected [from here](http://eslint.org/docs/rules/#nodejs-and-commonjs), configured to:

- [`no-path-concat`](http://eslint.org/docs/rules/no-path-concat): disallow string concatenation with `__dirname` and `__filename`
- [`no-process-exit`](http://eslint.org/docs/rules/no-process-exit): disallow the use of `process.exit()`
- [`no-sync`](http://eslint.org/docs/rules/no-sync): disallow synchronous methods; set to warn only

---

### [Node.js Style Guide](https://github.com/kunalgolani/eslint-config/tree/master/node/style-guide)