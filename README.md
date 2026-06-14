# 📝 TaskMint — Professional Developer Todo & Task Manager

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel&logoColor=white)](https://taskmint-tools.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer-motion&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

Created by **Rahil Shah (rahilshah3105)**, TaskMint is a premium, high-performance task management web application custom-built for developers, freelancers, and power users who need a clean, responsive, and distraction-free workflow environment. 

Deploy URL: [https://taskmint-tools.vercel.app/](https://taskmint-tools.vercel.app/)

---

## 📌 Problem Solved

Traditional task managers are either too bloated (requiring complex setup and heavy page loads) or too basic (lacking priority tracking, due dates, and categorization). 

TaskMint bridges this gap by providing:
- **Local-First Speed**: Lightning-fast client-side updates using React State and persistent local storage.
- **Workflow Organization**: Easily sort and filter tasks by priority, categories, and deadlines.
- **Gamified Engagement**: Visual progress analytics and custom confetti animations that celebrate task completion.

---

## 🌟 Key Features

- **🎨 Sleek Dark & Light Mode**: Seamless glassmorphic theme transitions that persist across visits using custom hooks and local storage.
- **⚡ Full CRUD Actions**: Create, read, update (with an intuitive modal), and delete tasks dynamically.
- **🏷️ Smart Categorization**: Keep tasks organized under **Personal**, **Work**, **Shopping**, or **Fitness**.
- **⚠️ Priority Levels**: Assign **Low**, **Medium**, or **High** priority levels to quickly recognize urgent actions.
- **📅 Due Dates & Deadlines**: Keep yourself accountable with clean, visual target date counters.
- **🔍 Live Search & Filtering**: Instant fuzzy filtering by active/completed status and dynamic search queries.
- **📊 Interactive Analytics**: Real-time progress indicators showing completed vs. pending tasks.
- **🎉 Celebratory Confetti**: Interactive rewards that trigger a confetti splash when you finish all active items.

---

## 🛠️ Technology Stack

TaskMint is built with a modern, production-grade frontend stack optimized for speed, scalability, and UX:
- **Core Library**: **React 18** (utilizing Functional Components, Context API for global state management, and custom hooks).
- **Styling**: **Tailwind CSS** (configured with customized glassmorphic attributes and responsive design boundaries).
- **Animations**: **Framer Motion** (declarative animations for modal mounting, exit states, and list reordering).
- **Icons**: **Lucide React** & **React Icons**.
- **Build System**: **Vite** (providing sub-second HMR and optimized production bundles).
- **Celebration Effects**: **Canvas Confetti**.

---

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI & Logic Components
│   ├── AdBanner.jsx        # Google AdSense integration placeholder
│   ├── DeveloperApps.jsx   # List of other projects by the author
│   ├── EditTaskModal.jsx   # Modal for editing active task parameters
│   ├── Footer.jsx          # Custom layout footer component
│   ├── Main.jsx            # Core dashboard layout containing list & stats
│   ├── Navbar.jsx          # Header navigation bar with theme switches
│   ├── PrivacyPolicy.jsx   # Standalone legal privacy policy page
│   ├── ThemeToggle.jsx     # Visual toggles for dark/light mode
│   ├── TodoFilters.jsx     # Filtering tabs and search controls
│   ├── TodoInput.jsx       # Interactive task addition form
│   ├── TodoItem.jsx        # Individual task list items with priority & dates
│   ├── TodoList.jsx        # Dynamic task list container with animations
│   └── TodoStats.jsx       # Task statistics and progress indicators
├── context/             # Global Context providers (ThemeContext, TodoContext)
├── hooks/               # Custom React hooks (useTodos, useTheme)
├── App.jsx              # Main routing and global app entry
├── App.css              # Global custom CSS rules
├── index.css            # Tailwind directives and customized components
└── main.jsx             # React DOM root entry point
```

---

## 🚀 Getting Started & Installation

Follow these beginner-friendly steps to get TaskMint running on your local machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 16.x or higher recommended) along with `npm` (Node Package Manager).

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/rahilshah3105/todo-list.git
   cd todo-list
   ```

2. **Install Project Dependencies**
   Run the following command to download all necessary libraries:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   The application uses environment variables to configure integration scripts (e.g., Google AdSense). Create a `.env` file in the root folder (or copy from the provided `.env.example` template):
   ```bash
   cp .env.example .env
   ```
   Open the newly created `.env` file in your code editor and customize the parameters:
   ```env
   VITE_ADSENSE_CLIENT_ID=ca-pub-YOUR_PUBLISHER_ID
   VITE_ADSENSE_TOP_SLOT=1234567890
   VITE_ADSENSE_BOTTOM_SLOT=0987654321
   ```

4. **Start the Development Server**
   Start the local development build:
   ```bash
   npm run dev
   ```
   Once started, your console will show the address (typically `http://localhost:5173`). Open it in your browser to view the application live.

5. **Build for Production**
   To compile and optimize your project for hosting on Vercel, Netlify, or custom servers, run:
   ```bash
   npm run build
   ```
   This generates a static production-ready `dist/` directory.

---

## 💡 Usage Guide

1. **Creating Tasks**: Enter your task name in the top input field. Choose a category, set the priority level (Low, Medium, High), select an optional due date, and click the "+" or hit enter.
2. **Editing Tasks**: Click the pencil icon on any task to trigger the edit modal. You can modify task titles, due dates, priority ratings, and categories here.
3. **Filtering & Searching**: Use the text input to search tasks in real-time. Click the tabs (All, Active, Completed) or categories (Work, Personal, Shopping, Fitness) to isolate target tasks.
4. **Completion & Deletion**: Tick the checkbox next to any task to mark it as complete. Enjoy the interactive confetti shower when all active items are finished. Click the red trash icon to delete a task.
5. **Theme Selection**: Toggle the theme mode via the sun/moon icon in the upper-right corner.

---

## 📸 Screenshots

| Light Mode Dashboard | Dark Mode Dashboard |
| --- | --- |
| *[Screenshot Placeholder - Light Mode Home]* | *[Screenshot Placeholder - Dark Mode Home]* |

| Edit Task Modal | Mobile Layout |
| --- | --- |
| *[Screenshot Placeholder - Edit Modal]* | *[Screenshot Placeholder - Responsive View]* |

---

## 🔮 Future Improvements

- **☁️ Cloud Synchronization**: Optional cloud integration (such as Supabase or Firebase) to sync todos across multiple devices.
- **📋 Subtask Checklists**: Support for nested checklist items within tasks for granular progress tracking.
- **🗂️ Kanban View Option**: An alternative drag-and-drop dashboard display mode.
- **🔄 Export/Import Features**: Easily download backups of tasks in JSON format and restore them dynamically.
- **📅 Interactive Calendar View**: A calendar dashboard to plan tasks across weeks and months visually.

---

## 👤 Author

Created by **Rahil Shah (rahilshah3105)**

* **GitHub**: [@rahilshah3105](https://github.com/rahilshah3105)
* **Repository Link**: [https://github.com/rahilshah3105/todo-list](https://github.com/rahilshah3105/todo-list)

Feel free to open an issue or submit a pull request if you have suggestions for new features!
