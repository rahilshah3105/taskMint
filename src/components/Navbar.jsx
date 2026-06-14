import React from 'react';
import ThemeToggle from './ThemeToggle';
import { MdCheckCircle } from "react-icons/md";

const Navbar = ({ currentTab, setCurrentTab }) => {
    return (
        <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 py-3 flex flex-wrap sm:flex-nowrap justify-between items-center gap-3">
                <div 
                    className='flex items-center gap-2.5 cursor-pointer'
                    onClick={() => setCurrentTab('tasks')}
                >
                    <MdCheckCircle className="text-3xl text-emerald-500 dark:text-emerald-400" />
                    <span className='font-bold text-xl tracking-tight text-gray-900 dark:text-white'>
                        Todo<span className="text-emerald-500 dark:text-emerald-400 font-extrabold">List</span>
                    </span>
                </div>
                
                {/* Navigation Links inside Navbar */}
                <div className="flex items-center gap-1 sm:gap-2 order-3 sm:order-none w-full sm:w-auto justify-center sm:justify-start border-t sm:border-t-0 pt-2 sm:pt-0 mt-1 sm:mt-0">
                    <button
                        onClick={() => setCurrentTab('tasks')}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                            currentTab === 'tasks'
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-semibold'
                                : 'text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white hover:bg-gray-55 dark:hover:bg-slate-800'
                        }`}
                    >
                        Tasks
                    </button>
                    <button
                        onClick={() => setCurrentTab('apps')}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                            currentTab === 'apps'
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-semibold'
                                : 'text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white hover:bg-gray-55 dark:hover:bg-slate-800'
                        }`}
                    >
                        Apps
                    </button>
                </div>

                <div className='flex items-center gap-4 ml-auto sm:ml-0'>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

