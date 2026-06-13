import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import DeveloperApps from './components/DeveloperApps'
import PrivacyPolicy from './components/PrivacyPolicy'
import AdBanner from './components/AdBanner'
import Footer from './components/Footer'

import { ThemeProvider } from './context/ThemeContext'
import { TodoProvider } from './context/TodoContext'
import { useTheme } from './hooks/useTheme'

function MainLayout() {
  const [currentTab, setCurrentTab] = useState('tasks');
  const { theme } = useTheme();

  // Load environment variables for Google AdSense
  const adsenseClientId = import.meta.env.VITE_ADSENSE_CLIENT_ID;
  const adsenseTopSlot = import.meta.env.VITE_ADSENSE_TOP_SLOT;
  const adsenseBottomSlot = import.meta.env.VITE_ADSENSE_BOTTOM_SLOT;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Top Advertisement Section */}
      <div className="w-full flex justify-center py-4 bg-gray-50/50 dark:bg-slate-800/30 border-b border-gray-100 dark:border-gray-800/50">
              <AdBanner
                client={adsenseClientId}
                slot={adsenseTopSlot}
                mode={theme}
                className="mx-auto px-4"
                minHeight="90px"
              />
            </div>

      {/* Main Content Area */}
      <div className="flex-grow">
            {currentTab === 'tasks' && <Main />}
            {currentTab === 'apps' && (
              <div className="container mx-auto px-4 py-8 max-w-6xl">
                <DeveloperApps />
              </div>
            )}
            {currentTab === 'privacy' && <PrivacyPolicy />}
      </div>

      {/* Bottom Advertisement Section */}
      <div className="w-full flex justify-center py-6 bg-gray-50/50 dark:bg-slate-800/30 border-t border-gray-100 dark:border-gray-800/50">
              <AdBanner
                client={adsenseClientId}
                slot={adsenseBottomSlot}
                mode={theme}
                className="mx-auto px-4"
                minHeight="90px"
              />
            </div>

      <Footer currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <MainLayout />
      </TodoProvider>
    </ThemeProvider>
  )
}

export default App

