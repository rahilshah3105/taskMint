import React, { forwardRef, useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { FaTrash, FaEdit, FaChevronDown, FaChevronUp, FaPlus } from 'react-icons/fa';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdPlaylistAddCheck } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const TodoItem = forwardRef(({ todo, onEdit }, ref) => {
    const { toggleTodo, deleteTodo, addSubtask, toggleSubtask, deleteSubtask } = useTodos();
    const [isSubtasksExpanded, setIsSubtasksExpanded] = useState(false);
    const [newSubtaskText, setNewSubtaskText] = useState('');

    const priorityColors = {
        Low: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        Medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        High: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    };

    const categoryColors = {
        Personal: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400',
        Work: 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400',
        Shopping: 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-500',
        Fitness: 'bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400',
    };

    const subtasks = todo.subtasks || [];
    const totalSubtasks = subtasks.length;
    const completedSubtasks = subtasks.filter(s => s.isCompleted).length;
    const isOverdue = todo.dueDate && !todo.isCompleted && new Date(todo.dueDate) < new Date().setHours(0, 0, 0, 0);

    const handleAddSubtaskSubmit = (e) => {
        e.preventDefault();
        if (!newSubtaskText.trim()) return;
        addSubtask(todo.id, newSubtaskText.trim());
        setNewSubtaskText('');
    };

    return (
        <motion.div
            layout
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col p-4 mb-3 bg-gray-100 dark:bg-slate-800 rounded-xl shadow-sm border border-gray-300 dark:border-gray-700 hover:shadow-md transition-all duration-200"
        >
            {/* Top Info Row */}
            <div className="group flex flex-col sm:flex-row items-center justify-between w-full gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto overflow-hidden">
                    <button
                        onClick={() => toggleTodo(todo.id)}
                        className="text-2xl text-gray-400 hover:text-primary-500 transition-colors flex-shrink-0"
                        aria-label="Toggle Complete Status"
                    >
                        {todo.isCompleted ? (
                            <MdCheckBox className="text-emerald-500 dark:text-emerald-400" />
                        ) : (
                            <MdCheckBoxOutlineBlank />
                        )}
                    </button>
 
                    <div className="flex flex-col overflow-hidden">
                        <span
                            className={clsx(
                                'text-lg font-medium truncate transition-all duration-200',
                                todo.isCompleted ? 'text-gray-400 line-through' : 'text-gray-900 dark:text-gray-200'
                            )}
                        >
                            {todo.text}
                        </span>
                        <div className="flex flex-wrap gap-2 text-xs mt-1">
                            <span className={clsx('px-2 py-0.5 rounded-md font-medium', priorityColors[todo.priority])}>
                                {todo.priority}
                            </span>
                            <span className={clsx('px-2 py-0.5 rounded-md font-medium', categoryColors[todo.category] || 'bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-300')}>
                                {todo.category}
                            </span>
                            {todo.dueDate && (
                                <span className={clsx("flex items-center gap-1", isOverdue ? "text-red-500 dark:text-red-400 font-semibold" : "text-gray-500 dark:text-gray-400")}>
                                    Due: {new Date(todo.dueDate).toLocaleDateString()}
                                    {isOverdue && <span className="px-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-[9px] uppercase font-black rounded">Overdue</span>}
                                </span>
                            )}
                            {totalSubtasks > 0 && (
                                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                                    <MdPlaylistAddCheck className="text-base" /> {completedSubtasks}/{totalSubtasks}
                                </span>
                            )}
                        </div>
                        {totalSubtasks > 0 && (
                            <div className="w-full bg-gray-200 dark:bg-slate-700 h-1 rounded-full mt-2 overflow-hidden max-w-[150px]" title={`${Math.round((completedSubtasks / totalSubtasks) * 100)}% completed`}>
                                <div
                                    className="bg-emerald-500 dark:bg-emerald-400 h-full rounded-full transition-all duration-500"
                                    style={{ width: `${(completedSubtasks / totalSubtasks) * 100}%` }}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Action Controls */}
                <div className="flex items-center justify-end gap-2 w-full sm:w-auto opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-t sm:border-t-0 pt-2 sm:pt-0">
                    <button
                        onClick={() => setIsSubtasksExpanded(!isSubtasksExpanded)}
                        className={clsx(
                            "p-2 rounded-lg text-gray-500 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1 text-sm font-medium",
                            isSubtasksExpanded && "text-primary-600 dark:text-primary-400 bg-gray-200 dark:bg-slate-700"
                        )}
                        title="Toggle Subtasks"
                    >
                        {isSubtasksExpanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                        <span className="text-xs">Subtasks</span>
                    </button>
                    <button
                        onClick={() => onEdit(todo)}
                        className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                        title="Edit Task"
                    >
                        <FaEdit />
                    </button>
                    <button
                        onClick={() => deleteTodo(todo.id)}
                        className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        title="Delete Task"
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>

            {/* Collapsible Subtask Panel */}
            <AnimatePresence>
                {isSubtasksExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-3 pt-3 border-t border-gray-200 dark:border-gray-700"
                    >
                        {/* Subtask List */}
                        <div className="space-y-1.5 pl-8">
                            {subtasks.length === 0 ? (
                                <p className="text-xs text-gray-500 dark:text-gray-400 italic">No subtasks added yet.</p>
                            ) : (
                                subtasks.map((sub) => (
                                    <div key={sub.id} className="flex items-center justify-between group/sub py-1 px-2 hover:bg-gray-200/50 dark:hover:bg-slate-700/50 rounded-lg transition-colors">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => toggleSubtask(todo.id, sub.id)}
                                                className="text-lg text-gray-400 hover:text-emerald-500 transition-colors"
                                            >
                                                {sub.isCompleted ? (
                                                    <MdCheckBox className="text-emerald-500 dark:text-emerald-400" />
                                                ) : (
                                                    <MdCheckBoxOutlineBlank />
                                                )}
                                            </button>
                                            <span className={clsx(
                                                'text-sm transition-all duration-200',
                                                sub.isCompleted ? 'text-gray-400 line-through' : 'text-gray-700 dark:text-gray-200'
                                            )}>
                                                {sub.text}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => deleteSubtask(todo.id, sub.id)}
                                            className="opacity-0 group-hover/sub:opacity-100 text-gray-400 hover:text-red-500 p-1 rounded transition-opacity"
                                            title="Delete Subtask"
                                        >
                                            <FaTrash size={12} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Subtask Input Form */}
                        <form onSubmit={handleAddSubtaskSubmit} className="mt-3 flex items-center gap-2 pl-8">
                            <input
                                type="text"
                                value={newSubtaskText}
                                onChange={(e) => setNewSubtaskText(e.target.value)}
                                placeholder="Add checklist subtask..."
                                className="flex-grow text-xs px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                            />
                            <button
                                type="submit"
                                disabled={!newSubtaskText.trim()}
                                className="px-2.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg flex items-center justify-center transition-colors"
                            >
                                <FaPlus size={10} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
});

export default TodoItem;

