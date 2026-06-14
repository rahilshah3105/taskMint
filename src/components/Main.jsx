import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import TodoInput from './TodoInput';
import TodoFilters from './TodoFilters';
import TodoList from './TodoList';
import TodoStats from './TodoStats';
import EditTaskModal from './EditTaskModal';

const Main = () => {
    const { editTodo } = useTodos();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedTodoToEdit, setSelectedTodoToEdit] = useState(null);

    const handleEdit = (todo) => {
        setSelectedTodoToEdit(todo);
        setIsEditModalOpen(true);
    }

    return (
        <main className="container mx-auto px-4 py-8 max-w-6xl">
            <header className="mb-8 text-center sm:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Good Day!
                    <span className="text-primary-700 dark:text-primary-500 ml-2"> Ready to work?</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Manage your tasks efficiently and get things done.
                </p>
            </header>

            <TodoStats />

            <TodoInput />

            <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl shadow-xl p-6 border-2 border-gray-300 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Tasks</h2>
                </div>

                <TodoFilters />

                <TodoList onEdit={handleEdit} />
            </div>

            {/* Custom Task Editor Modal */}
            <EditTaskModal
                todo={selectedTodoToEdit}
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setSelectedTodoToEdit(null);
                }}
                onSave={editTodo}
            />
        </main>
    )
}

export default Main
