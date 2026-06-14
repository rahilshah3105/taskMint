# 📝 Todo-list App - Professional Developer Task Manager

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer-motion&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

Todo-list App is a premium, feature-rich task management web application custom-built for developers, freelancers, and power users who need a clean, responsive, and distraction-free workflow environment. Built on top of React, Tailwind CSS, and Framer Motion, it offers a seamless UX with smooth transitions, interactive animations, and glassmorphic designs.

---

## 📌 Problem Solved

Traditional project management tools are often bloated, slow, and require complex onboarding. On the other hand, simple todo apps lack crucial planning capabilities like priority levels, categorization, target due dates, and productivity analytics. 

**Todo-list App bridges this gap by offering:**
* **Local-first, high-performance execution**: Immediate state updates with offline resilience.
* **Structured workflow controls**: Easy division of labor by priority and categories.
* **Gamified progress tracking**: Visual statistics and delightful confirmation animations that keep users engaged and motivated.

---

## 🌟 Key Features

* **🎨 Sleek Dark & Light Mode**: A beautifully crafted UI that switches themes instantly and persists your preference across browser reloads.
* **⚡ Full Task CRUD Controls**: Easily Add, Edit, Delete, and Toggle task completion statuses.
* **🏷️ Categorization**: Categorize your tasks under **Personal**, **Work**, **Shopping**, or **Fitness** to keep your life organized.
* **⚠️ Priority Levels**: Assign **Low**, **Medium**, or **High** priority levels to quickly determine what demands your attention first.
* **📅 Due Dates & Countdowns**: Set target deadlines for your tasks to keep yourself accountable.
* **🔍 Live Search & Filter**: Find any task in real-time with responsive filter tabs (All, Active, Completed) and keyword search.
* **📊 Analytics Dashboard**: Built-in interactive progress bars and stats counters showing completed vs. pending tasks.
* **🎉 Celebratory Gamification**: A burst of confetti celebrates your achievements once you clear your active tasks list!
* **📱 Fully Responsive**: Fluid layouts that look stunning on screens ranging from smartphones to 4K monitors.

---

## 🛠️ Technology Stack

* **Core UI Library**: [React 18](https://react.dev/) (Functional components, custom hooks, and Context API for global state management)
* **Styling & Theme System**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first framework configured with smooth custom transitions)
* **Animations**: [Framer Motion](https://www.framer.com/motion/) (Enables high-performance declarative UI entry, exit, and list re-ordering animations)
* **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)
* **Build System**: [Vite](https://vitejs.dev/) (For ultra-fast Hot Module Replacement and production bundling)
* **Celebration Effects**: [Canvas Confetti](https://github.com/catdad/canvas-confetti)

---

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI Components
│   ├── AdBanner.jsx        # Google AdSense ad placeholder & display
│   ├── DeveloperApps.jsx   # List of other developer projects
│   ├── EditTaskModal.jsx   # Modal for editing active tasks
│   ├── Footer.jsx          # Interactive bottom footer navigation
│   ├── Main.jsx            # Core dashboard layout containing list & stats
│   ├── Navbar.jsx          # Header navigation bar with theme switches
│   ├── PrivacyPolicy.jsx   # Standalone legal privacy policy page
│   ├── ThemeToggle.jsx     # Visual toggles for dark/light mode
│   ├── TodoFilters.jsx     # Filtering tabs and search controls
│   ├── TodoInput.jsx       # Interactive task addition form
│   ├── TodoItem.jsx        # Individual task list items with priority & dates
│   ├── TodoList.jsx        # Dynamic task list container with animations
│   └── TodoStats.jsx       # Task statistics and progress indicators
├── context/          # React Context (TodoContext, ThemeContext)
├── hooks/            # Custom Hooks (useTodos, useTheme)
├── App.jsx           # Main layout router and entry point
├── App.css           # Global application styles
├── index.css         # Tailwind base, utilities, and custom components
└── main.jsx          # Application mounting and React DOM rendering
```

---

## 🚀 Getting Started & Installation

Follow these quick steps to get Todo-list App up and running locally:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 16 or higher) and `npm` installed.

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/rahilshah3105/todo-list.git
   cd todo-list
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and define the required Google AdSense variables (or use the `.env.example` as a template):
   ```bash
   cp .env.example .env
   ```
   Open the `.env` file and set your publisher details:
   ```env
   VITE_ADSENSE_CLIENT_ID=ca-pub-YOUR_PUBLISHER_ID
   VITE_ADSENSE_TOP_SLOT=1234567890
   VITE_ADSENSE_BOTTOM_SLOT=0987654321
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to see the application running.

5. **Build for Production**
   ```bash
   npm run build
   ```
   The built assets will be generated in the `dist/` directory, ready to be served.

---

## 💡 Usage Guide

1. **Add a Task**: Use the input box at the top to type a title, set a category, select a priority, specify a due date, and click the add button.
2. **Filter & Search**: Type keywords into the search bar or toggle between "All", "Active", and "Completed" to quickly filter down your tasks list.
3. **Edit details**: Click the pencil icon on any task to open the Edit Task modal and update the task title, category, priority, or deadline.
4. **Complete/Delete**: Click the checkbox on any task to mark it complete. When all tasks are completed, enjoy the confetti explosion! Click the trash bin icon to remove a task.
5. **Theme Switch**: Toggle the sun/moon icon in the navigation bar to adapt the theme to your desktop environment.

---

## 📸 Screenshots

| Light Mode Dashboard | Dark Mode Dashboard |
| --- | --- |
| *[Screenshot Placeholder - Light Mode Home]* | *[Screenshot Placeholder - Dark Mode Home]* |

| Add/Edit Modal | Mobile View |
| --- | --- |
| *[Screenshot Placeholder - Edit Modal]* | *[Screenshot Placeholder - Responsive Layout]* |

---

## 🔮 Future Roadmaps

- [ ] **Cloud Sync**: Optional cloud database sync (e.g. Firebase or Supabase) to access todos across different devices.
- [ ] **Subtask Lists**: Add nested checklists for complex tasks.
- [ ] **Kanban Board View**: Toggle between a list view and a visual drag-and-drop Kanban Board layout.
- [ ] **Git Commits Integration**: Connect local repository changes directly to tasks.
- [ ] **Data Export/Import**: Download your tasks in JSON format and import them on other browsers.

---

## 👤 Author

Created by **Rahil Shah (rahilshah3105)**

* GitHub: [@rahilshah3105](https://github.com/rahilshah3105)
* Project Repo: [https://github.com/rahilshah3105/todo-list](https://github.com/rahilshah3105/todo-list)

Feel free to reach out, open an issue, or submit a pull request!
