# 🎨 Multi-Theme Switcher App

A React + TypeScript web application that supports three distinct visual themes. Each theme modifies the entire user interface, including layout, font, colors, spacing, and more. Built with performance and responsiveness in mind, this app provides a smooth and engaging user experience with persistent theming across sessions.

## 🚀 Features

- **Theme Switcher** with 3 distinct themes:
  - **Theme 1 (Default):** Minimalist light theme with clean sans-serif typography
  - **Theme 2:** Dark theme with a sidebar layout and bold serif fonts
  - **Theme 3:** Colorful theme with a card-based grid and playful font (e.g., *Pacifico*)
- **Persistent Themes** using `localStorage`
- **Multi-page routing** with React Router (`Home`, `About`, `Contact`)
- **Fully responsive** layout (desktop and mobile)
- **Theme management** using React Context API
- **Secure** and production-ready setup
- **Subtle animations** for theme switching
- **Modular Styling** with Tailwind CSS (or Styled-components / CSS Modules)
- **Fake Store API integration** to demonstrate dynamic data (`https://fakestoreapi.com/products`)
- **Built with TypeScript** for type safety and maintainability

## 📁 Project Structure

REACT-THEME-SWITCHER/
├── node_modules/                        # Installed dependencies
├── public/
│   └── index.html                       # HTML entry point
│
├── src/
│   ├── assets/
│   │   └── react.svg                    # Static assets (e.g., logo)
│
│   ├── components/
│   │   ├── common/
│   │   │   └── card/
│   │   │       └── index.tsx            # Reusable card component (used in grid view)
│   │   │
│   │   ├── layouts/
│   │   │   └── index.tsx                # Global layout wrapper
│   │   │
│   │   └── master/
│   │       ├── footer/
│   │       │   └── index.tsx            # Footer section
│   │       ├── header/
│   │       │   └── index.tsx            # Header with theme dropdown
│   │       └── sidebar/
│   │           └── index.tsx            # Sidebar which is used in theme 2
│
│   ├── context/
│   │   └── ThemeContext.tsx             # Theme Context for switching and persisting theme with localStorage 
│
│   ├── services/
│   │   └── products/
│   │       └── product-service.tsx      # Service to fetch products from fakestoreapi.com 
│
│   ├── App.tsx                          # Main app component with routing
│   ├── App.css                          # App-specific styles (if used alongside Tailwind)
│   ├── index.css                        # Entry styles and Tailwind directives
│   ├── main.tsx                         # Root renderer and provider wrapper
│   ├── vite-env.d.ts                    # TypeScript Vite support file
│
├── .gitignore                           # Git ignored files
├── eslint.config.js                     # ESLint configuration
├── index.html                           # HTML base template
├── package.json                         # NPM dependencies and scripts
├── package-lock.json                    # Dependency lock file
├── postcss.config.js                    # PostCSS setup (for Tailwind)
├── tailwind.config.js                   # Tailwind theme customization
├── tsconfig.app.json                    # App-specific TypeScript config
├── tsconfig.json                        # Root TypeScript configuration
├── tsconfig.node.json                   # Node typescript config (used by Vite)
├── vite.config.ts                       # Vite configuration
├── README.md                            # Project documentation 


## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/AnshuOfficialGit/React-Theme-Switcher.git
cd React-Theme-Switcher

# Install dependencies
npm install

# Start the development server
npm run dev




Scripts

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format



## 🎨 Themes Overview

| Theme    | Font        | Layout      | Colors           | Special Elements            |
|----------|-------------|-------------|------------------|-----------------------------|
| Theme 1  | Sans-serif  | Top Nav     | Light/Minimal    | Clean, minimalist           |
| Theme 2  | Serif       | Sidebar     | Dark             | Compact, bold               |
| Theme 3  | Pacifico    | Card-based  | Vibrant Colors   | Fun, playful, spacious      |
