# UL 学生管理系统

一个现代化的学生账户管理和展示系统，采用 React + TypeScript + Vite 构建，仿照 UFOERIC 个人网站风格设计。

## 功能特点

### 🎨 UI 设计
- 仿照 UFOERIC 网站的现代化深色主题
- 渐变背景和玻璃态效果
- 流畅的动画和过渡效果
- 响应式设计，支持移动端

### 📦 Container 组件系统
系统采用 Container 设计模式，分别管理不同类型的内容：

1. **TextContainer** - 文字内容管理
   - 支持标题和正文
   - 多种样式变体（default, highlight, info, warning）
   - 自动响应式布局

2. **TableContainer** - 表格数据管理
   - 自定义列配置
   - 支持自定义渲染
   - 行点击事件
   - 悬停效果

3. **ImageContainer** - 图片内容管理
   - 网格布局（2/3/4列）
   - 图片预览模态框
   - 图片说明文字
   - 懒加载支持

4. **VideoContainer** - 视频内容管理
   - 响应式视频播放器
   - 16:9 宽高比
   - 自动播放选项
   - 视频信息展示

### 👥 用户角色

#### 管理员功能
- 学生信息管理（增删改查）
- 数据统计展示
- 审计日志查看
- 系统概览

#### 学生功能
- 个人信息查看
- 课程信息展示
- 学习资源访问
- 成绩统计

## 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **构建工具**: Vite
- **UI 框架**: React Bootstrap
- **状态管理**: Redux
- **路由**: React Router DOM
- **样式**: CSS3 + Bootstrap 5

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 演示账户

### 管理员账户
- 邮箱: `admin@ul.com`
- 密码: `admin123`

### 学生账户
- 邮箱: 任意邮箱
- 密码: 任意密码

## 项目结构

```
src/
├── Container/              # Container 组件
│   ├── TextContainer.tsx   # 文字容器
│   ├── TableContainer.tsx  # 表格容器
│   ├── ImageContainer.tsx  # 图片容器
│   └── VideoContainer.tsx  # 视频容器
├── Pages/                  # 页面组件
│   ├── Login_Page/         # 登录相关页面
│   ├── ADMIN/              # 管理员页面
│   ├── Dashboard_Home_Page_ADMIN.tsx
│   ├── Dashboard_Home_Page_User.tsx
│   └── Users_Information.tsx
├── App.tsx                 # 主应用组件
├── Store.tsx               # Redux 状态管理
└── main.tsx                # 应用入口
```

## 特色功能

### Container 设计模式
所有内容通过统一的 Container 组件进行管理，提供：
- 一致的视觉风格
- 统一的交互体验
- 易于扩展和维护
- 高度可复用

### 响应式设计
- 移动端优先
- 自适应布局
- 触摸友好的交互

### 现代化 UI
- 玻璃态效果（Glassmorphism）
- 渐变色彩
- 平滑动画
- 悬停效果

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT License

## 作者

UL Team

