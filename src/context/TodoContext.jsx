import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import confetti from 'canvas-confetti';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Migration logic for old data structure
                return parsed.map(t => ({
                    ...t,
                    text: t.text || t.todo || "", // Handle legacy 'todo' property
                    priority: t.priority || "Medium",
                    category: t.category || "Personal",
                    subtasks: t.subtasks || [] // Handle legacy subtasks missing
                }));
            } catch (e) {
                console.error("Failed to parse todos", e);
                return [];
            }
        }
        return [];
    });
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('all'); // all, active, completed
    const [sortBy, setSortBy] = useState('created'); // created, dueDate, priority

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text, priority = 'Medium', category = 'Personal', dueDate = '') => {
        const newTodo = {
            id: uuidv4(),
            text,
            isCompleted: false,
            priority, // Low, Medium, High
            category,
            dueDate,
            createdAt: new Date().toISOString(),
            subtasks: []
        };
        setTodos((prev) => [newTodo, ...prev]);
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos((prev) => {
            const newTodos = prev.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            );

            // Check if all completed for confetti
            const allCompleted = newTodos.length > 0 && newTodos.every(t => t.isCompleted);
            if (allCompleted) {
                confetti({
                    particleCount: 100,
                    style: { zIndex: 1000 },
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
            return newTodos;
        });
    };

    const editTodo = (id, newText, newPriority, newCategory, newDueDate) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, text: newText, priority: newPriority, category: newCategory, dueDate: newDueDate } : todo
            )
        );
    };

    const addSubtask = (todoId, text) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === todoId
                    ? {
                          ...todo,
                          subtasks: [
                              ...(todo.subtasks || []),
                              { id: uuidv4(), text, isCompleted: false },
                          ],
                      }
                    : todo
            )
        );
    };

    const toggleSubtask = (todoId, subtaskId) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === todoId
                    ? {
                          ...todo,
                          subtasks: (todo.subtasks || []).map((sub) =>
                              sub.id === subtaskId ? { ...sub, isCompleted: !sub.isCompleted } : sub
                          ),
                      }
                    : todo
            )
        );
    };

    const deleteSubtask = (todoId, subtaskId) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === todoId
                    ? {
                          ...todo,
                          subtasks: (todo.subtasks || []).filter((sub) => sub.id !== subtaskId),
                      }
                    : todo
            )
        );
    };

    const clearCompletedTodos = () => {
        setTodos((prev) => prev.filter((todo) => !todo.isCompleted));
    };

    const filteredTodos = todos.filter((todo) => {
        const todoText = todo.text || ""; // Safety check
        const matchesQuery = todoText.toLowerCase().includes(query.toLowerCase());
        const matchesFilter =
            filter === 'all'
                ? true
                : filter === 'active'
                    ? !todo.isCompleted
                    : todo.isCompleted;
        return matchesQuery && matchesFilter;
    });

    const priorityWeights = { High: 3, Medium: 2, Low: 1 };

    const sortedTodos = [...filteredTodos].sort((a, b) => {
        if (sortBy === 'dueDate') {
            if (!a.dueDate) return 1;
            if (!b.dueDate) return -1;
            return new Date(a.dueDate) - new Date(b.dueDate);
        }
        if (sortBy === 'priority') {
            return priorityWeights[b.priority] - priorityWeights[a.priority];
        }
        // default 'created'
        return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    });

    const stats = {
        total: todos.length,
        completed: todos.filter((t) => t.isCompleted).length,
        active: todos.filter((t) => !t.isCompleted).length,
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                filteredTodos: sortedTodos,
                query,
                setQuery,
                filter,
                setFilter,
                sortBy,
                setSortBy,
                addTodo,
                deleteTodo,
                toggleTodo,
                editTodo,
                addSubtask,
                toggleSubtask,
                deleteSubtask,
                clearCompletedTodos,
                stats,
                setTodos
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

