# CSIS IAM Service

A modern Identity and Access Management platform built with React + TypeScript + Vite, providing user authentication, authorization, role management, and comprehensive audit logging capabilities.

## Features

### 🎨 Modern UI Design
- Dark theme with gradient backgrounds
- Glassmorphism effects
- Smooth animations and transitions
- Fully responsive design

### 🔐 Identity & Access Management

#### Admin Features
- User management (CRUD operations)
- Role-based access control
- Comprehensive audit logging
- Real-time statistics dashboard
- Session management
- Password reset functionality

#### User Features
- Personal profile management
- Secure authentication
- Password change
- Session monitoring
- Account settings

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **UI Framework**: React Bootstrap
- **State Management**: Redux
- **Routing**: React Router DOM
- **Styling**: CSS3 + Bootstrap 5

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Demo Accounts

### Admin Account
- Email: `admin@ul.com`
- Password: `admin123`

### User Account
- Email: `user@ul.com`
- Password: `user123`

## Project Structure

```
src/
├── Container/              # Reusable container components
│   ├── TextContainer.css
│   ├── TableContainer.css
│   ├── ImageContainer.css
│   └── VideoContainer.css
├── Pages/                  # Page components
│   ├── Login_Page/         # Authentication pages
│   ├── ADMIN/              # Admin-only pages
│   │   ├── Student_Management.tsx
│   │   └── Audit_Logs.tsx
│   ├── Dashboard_Home_Page_ADMIN.tsx
│   ├── Dashboard_Home_Page_User.tsx
│   ├── Settings_Page.tsx
│   └── Users_Information.tsx
├── App.tsx                 # Main application component
├── Store.tsx               # Redux state management
└── main.tsx                # Application entry point
```

## Key Features

### Security
- Secure authentication system
- Role-based access control (RBAC)
- Session management
- Password encryption
- Audit logging for all actions

### User Management
- Complete CRUD operations
- User activation/deactivation
- Password reset functionality
- Bulk operations support
- Advanced filtering and search

### Responsive Design
- Mobile-first approach
- Adaptive layouts
- Touch-friendly interactions
- Cross-device compatibility

### Modern UI/UX
- Glassmorphism effects
- Gradient backgrounds
- Smooth animations
- Intuitive navigation

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Live Demo
Visit: [https://ufoericlaito.github.io/CSIS_IAM_service/](https://ufoericlaito.github.io/CSIS_IAM_service/)

