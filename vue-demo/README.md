# vue-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Referoence](https://cli.vuejs.org/config/).

### 出现报错
错误
```js
Elements in iteration expect to have 'v-bind:key' directives.
```

解决办法：
```text
1.在v-for 后添加 :key='item'
<li v-for="i in list" :key="i">

<div class="item" v-for="(user,index) in datalist" :key='index' >
2.在build处关闭eslint检测
...(config.dev.useEslint ? [createLintingRule()] : []),

3.更改vetur配置 vscode->首选项->设置->搜索（vetur）
"vetur.validation.template": true,
改成：false
```

