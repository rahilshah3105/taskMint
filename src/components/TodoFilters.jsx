import React from 'react';
import { useTodos } from '../hooks/useTodos';
import clsx from 'clsx';
import { IoSearch } from "react-icons/io5";
import { FaDownload, FaUpload, FaTrashAlt, FaSortAmountDown } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const TodoFilters = () => {
    const { 
        filter, 
        setFilter, 
        query, 
        setQuery,
        sortBy,
        setSortBy,
        clearCompletedTodos,
        stats,
        todos,
        setTodos
    } = useTodos();

    const filters = ['all', 'active', 'completed'];

    const handleExport = () => {
        if (todos.length === 0) {
            alert("No tasks available to export.");
            return;
        }
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(todos, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `todolist-backup-${new Date().toISOString().slice(0, 10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    };

    const handleImport = (e) => {
        const fileReader = new FileReader();
        if (e.target.files && e.target.files[0]) {
            fileReader.readAsText(e.target.files[0], "UTF-8");
            fileReader.onload = (event) => {
                try {
                    const parsed = JSON.parse(event.target.result);
                    if (Array.isArray(parsed)) {
                        const validated = parsed.map(t => ({
                            id: t.id || uuidv4(),
                            text: t.text || t.todo || "Imported Task",
                            isCompleted: !!t.isCompleted,
                            priority: t.priority || "Medium",
                            category: t.category || "Personal",
                            dueDate: t.dueDate || "",
                            createdAt: t.createdAt || new Date().toISOString(),
                            subtasks: t.subtasks || []
                        }));
                        setTodos(validated);
                        alert("Tasks imported successfully!");
                    } else {
                        alert("Invalid backup file format. Expected a JSON list.");
                    }
                } catch (error) {
                    alert("Failed to parse file. Please verify it is a valid JSON backup file.");
                }
            };
        }
    };

    return (
        <div className="flex flex-col gap-4 mb-6">
            {/* Row 1: Search & Filter Tabs */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex gap-2 bg-gray-100 dark:bg-slate-800 p-1 rounded-xl w-full md:w-auto">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={clsx(
                                'flex-1 md:flex-initial px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200',
                                filter === f
                                    ? 'bg-emerald-600 text-white shadow-md hover:bg-emerald-700'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-150 dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-700'
                            )}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-auto">
                    <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search items..."
                        className="pl-10 pr-4 py-2 rounded-xl bg-gray-200 dark:bg-slate-700 border-none focus:ring-2 focus:ring-emerald-500/50 w-full md:w-64 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Row 2: Sort preferences & Backups / Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700/50 pt-4">
                {/* Sort selection */}
                <div className="flex items-center gap-2 text-sm text-gray-650 dark:text-gray-400">
                    <FaSortAmountDown className="text-gray-500" />
                    <span className="font-medium">Sort by:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-gray-100 dark:bg-slate-700 border-none rounded-lg text-xs font-semibold px-2.5 py-1.5 focus:ring-1 focus:ring-emerald-500 text-gray-700 dark:text-gray-200"
                    >
                        <option value="created">Date Created</option>
                        <option value="dueDate">Due Date</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>

                {/* Import/Export + Clear Completed buttons */}
                <div className="flex flex-wrap items-center gap-2">
                    {/* Export */}
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-650 text-xs font-semibold text-gray-700 dark:text-gray-200 rounded-lg transition-colors border border-gray-200 dark:border-transparent"
                        title="Export tasks to JSON backup"
                    >
                        <FaDownload size={11} className="text-gray-500 dark:text-gray-400" />
                        <span>Export</span>
                    </button>

                    {/* Import */}
                    <label
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-650 text-xs font-semibold text-gray-700 dark:text-gray-200 rounded-lg transition-colors cursor-pointer border border-gray-200 dark:border-transparent"
                        title="Import tasks from JSON backup"
                    >
                        <FaUpload size={11} className="text-gray-500 dark:text-gray-400" />
                        <span>Import</span>
                        <input
                            type="file"
                            accept=".json"
                            onChange={handleImport}
                            className="hidden"
                        />
                    </label>

                    {/* Clear Completed */}
                    {stats.completed > 0 && (
                        <button
                            onClick={() => {
                                if (window.confirm("Are you sure you want to clear all completed tasks?")) {
                                    clearCompletedTodos();
                                }
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-xs font-semibold text-red-650 dark:text-red-400 rounded-lg transition-colors border border-red-500/20"
                            title="Delete completed tasks"
                        >
                            <FaTrashAlt size={11} />
                            <span>Clear Finished</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoFilters;
