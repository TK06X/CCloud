cloud-app-admin☁️
vue vite pinia  GitHub release

简介
cloud-app-admin 使用了最新的vue3.2+ vite3 Element-Plus TypeScript Tailwind CSS等主流技术开发，希望能和大家一起学习最新前端技术。

在线体验
线上地址： cloud-app-admin

项目文档（WIP）
线上地址： cloud-blog

已实现功能
 路由集成 🧭
 页面与按钮权限集成 🔒
 状态管理集成（Pinia）🍍
 Hooks集成（VueUse）🪝
 ElementPlus集成 🖌️
 Tailwind CSS集成 🌹
 Axios二次封装 📦
 i18n国际化集成 🌍
 代码规范集成（EditorConfig、Eslint、Prettier、Husky、Lint-staged）📒
 Vxe-table多维度图表组件引入 📈
 封装常用通知、表格Hooks 🎺
 Echarts图表组件库引入 🪐
 富文本编辑器引入（WangEditor）📝
 Mock引入 🔍
 支持暗黑模式 🎆
 支持动态换肤（CSS Variables方案） 🌈
 unplugin-icons引入，配合unplugin-components，无需注册即可按需访问数千个图标作为组件 😊
安装使用
获取项目代码
git clone https://github.com/cloudhao1999/cloud-app-admin.git
安装依赖
cd cloud-app-admin

pnpm install
运行
pnpm dev
项目结构
├── LICENSE                   授权文件
├── README.md                 README
├── dist                      编译目录
│   ├── assets
│   ├── favicon.ico
│   ├── images
│   └── index.html
├── index.html                HTML模板
├── locales                   I18n文件
│   ├── en.json
│   └── zh-CN.json
├── mock                      模拟数据文件
│   ├── article.ts
│   ├── route.ts
│   ├── upload.ts
│   └── user.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public                    网站公共目录 
│   ├── favicon.ico           网站图标 
│   └── images                资源文件
├── screenshot                截图
│   ├── crud.png
│   ├── dashboard-dark.png
│   ├── dashboard-light.png
│   ├── editor.png
│   ├── i18n.png
│   ├── login.png
│   ├── mobile.png
│   └── nested.png
├── src  源码目录
│   ├── App.vue               页面入口
│   ├── api                   接口文件
│   ├── assets                静态资源
│   ├── components            公共组件
│   ├── directives            指令库
│   ├── enum                  全局枚举文件
│   ├── env.d.ts
│   ├── hooks                 自定义hooks
│   ├── layouts               项目布局文件
│   ├── main.ts               程序入口
│   ├── model                 模型定义类型文件
│   ├── plugins               插件文件
│   ├── router                路由文件
│   ├── store                 全局状态
│   ├── style                 全局样式
│   ├── utils                 工具库
│   └── views                 视图
├── stats.html
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── types                     ts类型定义
│   ├── auto-imports.d.ts
│   ├── components.d.ts
│   ├── http.d.ts
│   ├── menu.d.ts
│   ├── resultType.d.ts
│   ├── router.d.ts
│   ├── table.d.ts
│   └── viteEnv.d.ts
├── vite															
│   ├── alias.ts              vite别名配置
│   ├── plugins               vite插件模块
│   └── util.ts               vite工具库
└── vite.config.ts            vite配置文件
Git 贡献提交规范
项目已经内置angular提交规范，通过cz 代替git commit 命令即可
