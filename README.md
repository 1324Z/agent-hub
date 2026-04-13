# 智能体运营管理平台 (Agent Operations Platform)

这是一个基于 React + TypeScript + Vite 构建的现代化智能体运营管理后台。项目采用了极简主义设计风格，集成了数据分析、用户管理、会话监控及运营配置等核心功能。

## 🚀 技术栈

- **前端框架**: React 19
- **构建工具**: Vite 6
- **样式处理**: Tailwind CSS 4
- **图表库**: Recharts (用于数据可视化)
- **动画库**: Motion (motion/react)
- **图标库**: Lucide React
- **路由**: React Router 7

## 🛠️ 本地开发环境配置

在开始之前，请确保您的本地环境已安装以下工具：

- [Node.js](https://nodejs.org/) (建议版本 18.0 或更高)
- [npm](https://www.npmjs.com/) 或 [yarn](https://yarnpkg.com/)

### 1. 克隆项目

如果您是从代码仓库获取的，请先克隆项目：

```bash
git clone <your-repository-url>
cd <project-directory>
```

### 2. 安装依赖

在项目根目录下运行以下命令安装所需的 npm 包：

```bash
npm install
```

### 3. 启动开发服务器

安装完成后，运行以下命令启动本地开发服务器：

```bash
npm run dev
```

启动后，您可以在浏览器中访问 `http://localhost:3000` 查看应用。

### 4. 项目构建 (生产环境)

如果您需要构建用于生产环境的静态文件，请运行：

```bash
npm run build
```

构建产物将存放在 `dist` 目录中。

## 📁 项目结构

- `src/components`: 存放可复用的 UI 组件。
- `src/pages`: 存放各个功能模块的页面组件（如数据分析、用户管理等）。
- `src/contexts`: 存放全局状态管理（如配置上下文）。
- `src/assets`: 存放静态资源文件。
- `src/index.css`: 全局样式文件，包含 Tailwind CSS 的配置。

## 📝 注意事项

- **端口配置**: 本项目默认使用 `3000` 端口。如果该端口被占用，您可以在 `package.json` 的 `dev` 脚本中修改 `--port` 参数。
- **环境变量**: 如果项目后续集成了 Gemini API 或其他后端服务，请参考 `.env.example` 文件创建您的 `.env` 文件并配置相应的 API Key。

---

希望这份说明能帮助您顺利在本地部署项目！如有任何问题，请随时联系。
