目录结构
```
├── bin
│ └── www // 全局命令执行的根文件
├── src
│ ├── main.js // 入口文件
│ └── utils // 存放工具方法
| |**_constants.js // 存放用户所需要的常量
| |_**common.js
│ ├── create.js // create 命令所有逻辑
│ ├── config.js // config 命令所有逻辑
│── .huskyrc // git hook
│── .eslintrc.json // 代码规范校
├── package.json
|__ README.md
```
- create init <project name> 创建vue项目
- 使用watch自动添加路由导航， 也可以通过 create refresh 手动添加

[Link Here](https://www.npmjs.com/package/jxz-cli)