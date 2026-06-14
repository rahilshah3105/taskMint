import React, { useState, useEffect } from 'react';
import { FaTimes, FaSave, FaHeading, FaTags, FaCalendarAlt, FaExclamationTriangle } from 'react-icons/fa';

export default function EditTaskModal({ todo, isOpen, onClose, onSave }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('Personal');
  const [dueDate, setDueDate] = useState('');

  // Sync state with todo when it changes or modal opens
  useEffect(() => {
    if (todo) {
      setText(todo.text || '');
      setPriority(todo.priority || 'Medium');
      setCategory(todo.category || 'Personal');
      setDueDate(todo.dueDate || '');
    }
  }, [todo, isOpen]);

  if (!isOpen || !todo) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSave(todo.id, text.trim(), priority, category, dueDate);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-md mx-4 transform transition-all scale-100 duration-300 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-850 pb-4 mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            Edit Task
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Task Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-750 dark:text-gray-300 flex items-center gap-1.5">
              <FaHeading size={12} className="text-primary-500" />
              Task Description
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What needs to be done?"
              className="w-full bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-base"
              required
            />
          </div>

          {/* Priority & Category selection row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-750 dark:text-gray-300 flex items-center gap-1.5">
                <FaExclamationTriangle size={12} className="text-primary-500" />
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-sm"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-750 dark:text-gray-300 flex items-center gap-1.5">
                <FaTags size={12} className="text-primary-500" />
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-sm"
              >
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
                <option value="Shopping">Shopping</option>
                <option value="Fitness">Fitness</option>
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-750 dark:text-gray-300 flex items-center gap-1.5">
              <FaCalendarAlt size={12} className="text-primary-500" />
              Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-sm"
            />
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-850">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!text.trim()}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl flex items-center gap-1.5 transition-colors shadow-md active:scale-95 transform"
            >
              <FaSave size={13} />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
