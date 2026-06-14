import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Footer({ currentTab, setCurrentTab }) {
  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-auto transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
          <button
            onClick={() => setCurrentTab('privacy')}
            className={`hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 ${
              currentTab === 'privacy' ? 'text-primary-600 dark:text-primary-400 font-semibold' : ''
            }`}
          >
            Privacy Policy
          </button>
        </div>

        {/* Footer Signature */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium tracking-wide bg-gray-50 dark:bg-slate-800/60 px-4 py-1.5 rounded-full border border-gray-150 dark:border-gray-800 shadow-sm">
          <span>Made with</span>
          <FaHeart className="text-red-500 scale-110 hover:scale-125 transition-transform duration-200 animate-pulse cursor-pointer" />
          <span>in India</span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} TodoList. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
