# Worscpace Knowledge Base UI (React) 

A responsive, pixel-perfect React application that implements the "Worscpace" Knowledge Base dashboard functionality. Built entirely with functional components, React Hooks, and Tailwind CSS.

## 🚀 Technologies

*   **React 18** - UI Component Library
*   **Vite** - High-performance Next Generation Frontend Tooling
*   **Tailwind CSS** - Utility-first CSS framework for precise styling
*   **PostCSS & Autoprefixer** - CSS transformations

## 📦 Features

*   **Production-Ready Architecture:** Clean separations of standard structural elements (`layouts`, `pages`, `components`).
*   **100% Custom Styling:** Extends standard Tailwind CSS config to encapsulate custom brand tokens (`primary: #4F46E5`, `secondary: #1E1B4B`). No generic UI libraries (like MUI or Bootstrap) are utilized.
*   **Accessible Components:** Includes focus outlines, interactive states, and pixel-aligned layout metrics.
*   **Interactive Modals:** Fully functional, state-driven dialog functionality to support creating new entities.
*   **Responsive Grids:** Fully scales properly from mobile layout stacking up to expansive desktop structural grids.

## 📂 Project Structure

```text
src/
├── components/           # Reusable functional UI components
│   ├── Card.jsx          # Dashboard statistic / entry tiles
│   ├── CreateNewModal.jsx# Form overlay for database entries
│   ├── Header.jsx        # Top navigational and contextual bar 
│   └── Sidebar.jsx       # Left-hand hierarchical routing menu
├── layouts/              # Scaffolding containers
│   └── MainLayout.jsx    # Root orchestrator spanning full viewport
├── pages/                # Parent route views
│   └── KnowledgeBaseHome.jsx # Main dashboard application view
├── App.jsx               # Application root
└── index.css             # Root Tailwind CSS entry
```

## 🛠️ Installation & Setup

1.  **Clone the repository / open the directory**

2.  **Install dependencies**
    ```sh
    npm install
    ```

3.  **Run the local development server**
    ```sh
    npm run dev
    ```

4.  **Open the Local URL shown** (typically `http://localhost:5173/`)
