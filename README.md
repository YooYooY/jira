# Jira

## 准备

配置[prettier](https://prettier.io/docs/en/install.html)

```sh
npm install --save-dev --save-exact prettier
```

添加`.prettierrc.json`和`.prettierignore`

配置 `Git hooks`，安装`lint-staged`:

```sh
 npx mrm lint-staged
```

package.json 配置：

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,css,md,ts,tsx}": "prettier --write"
  }
}
```

解决 eslint 和 prettier 冲突，安装`eslint-config-prettier`:

```sh
npm i eslint-config-prettier -D
```

`package.json`添加 eslnt 扩展规则：

```json
{
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest", "prettier"]
  }
}
```

配置提交规范：

安装[commitlint](https://github.com/conventional-changelog/commitlint):

```sh
npm i @commitlint/{config-conventional,cli} -D
```

配置`commitlint.config.js`:

```sh
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```
