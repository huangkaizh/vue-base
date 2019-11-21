# vue-base

webpack4+vue+less+eslint+vscode 脚手架
vscode 需要安装 ESLint、Prettier、Vetur 等插件, 并且安装依赖（npm install）之后才能正常使用 Eslint 功能（保存、格式化等操作时自动修复 eslint 警告）

#安装依赖
npm install

#测试环境打包（带 source-map）
npm run build 或 npm run build:stage

#生产环境打包
npm run build:prod

#生产环境项目目录结构
vue-base
|-static
|-|-favicon.ico
|-index.html

#解压脚本(centos 命令行)
tar -xzvf vue-base-20191111160625.tar.gz -C vue-base
