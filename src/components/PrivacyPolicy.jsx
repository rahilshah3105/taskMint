import React from 'react';
import { FaHeart, FaShieldAlt, FaCookieBite, FaUserLock, FaRegClock } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="mb-8 text-center sm:text-left border-b border-gray-200 dark:border-gray-800 pb-6">
        <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
          <FaShieldAlt className="text-3xl text-primary-600 dark:text-primary-500 animate-pulse" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Last Updated: June 2026. Your privacy and trust are important to us.
        </p>
      </header>

      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        
        {/* Section 1: Intro */}
        <section className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
            <FaUserLock className="text-primary-600" /> 1. Overview
          </h2>
          <p className="leading-relaxed">
            Welcome to <strong>TodoList</strong>. We are committed to protecting your personal information and your right to privacy. Since TodoList runs as a client-side application, your tasks, subtasks, categories, and settings are saved locally in your browser's <code className="bg-gray-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm text-red-500">localStorage</code>. We do not store or transmit your tasks to external databases.
          </p>
        </section>

        {/* Section 2: Google AdSense and Cookies */}
        <section className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
            <FaCookieBite className="text-primary-600" /> 2. Google AdSense & Cookies
          </h2>
          <div className="space-y-3 leading-relaxed">
            <p>
              We integrate third-party advertising services provided by Google AdSense to monetize our site. In compliance with Google AdSense policy, please note the following:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Google and other third-party vendors use cookies to serve ads based on a user's prior visits to this or other websites.
              </li>
              <li>
                Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.
              </li>
              <li>
                Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Ads Settings</a> or <a href="https://www.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">www.aboutads.info</a>.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Data Integrity */}
        <section className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
            <FaRegClock className="text-primary-600" /> 3. Data Storage & Retention
          </h2>
          <p className="leading-relaxed">
            Your data is stored exclusively on your device. Clearing your browser cache or site data will remove your saved tasks unless you have exported them as a JSON backup using our built-in Import/Export features. We recommend exporting periodic backups if you wish to preserve your list.
          </p>
        </section>

        {/* Section 4: Contact & Consent */}
        <section className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            4. Consent
          </h2>
          <p className="leading-relaxed">
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </section>
      </div>

      {/* Styled Footer for India Badge */}
      <div className="mt-12 flex flex-col items-center justify-center p-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium tracking-wide bg-gray-100 dark:bg-slate-800/80 px-4 py-2 rounded-full shadow-sm">
          <span>Made with</span>
          <FaHeart className="text-red-500 hover:scale-125 transition-transform duration-200 cursor-pointer animate-pulse" />
          <span>in India</span>
        </div>
      </div>
    </div>
  );
}
