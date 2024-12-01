import { createSlice } from '@reduxjs/toolkit';

// Load tasks from localStorage if available
const loadTasksFromLocalStorage = () => {
    const tasksFromStorage = localStorage.getItem('tasks');
    return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
};

// Initial state is loaded from localStorage
const initialState = loadTasksFromLocalStorage();

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            // Adding a new task with default completion status as false
            state.push({
                ...action.payload,
                completed: false, // Default is not completed
            });
            // Save updated tasks to localStorage
            localStorage.setItem('tasks', JSON.stringify(state));
        },
        toggleTask: (state, action) => {
            // Toggle the completion status of a task
            const task = state.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
                // Save updated tasks to localStorage
                localStorage.setItem('tasks', JSON.stringify(state));
            }
        },
        deleteTask: (state, action) => {
            // Remove the task and save the updated list to localStorage
            const updatedTasks = state.filter((task) => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        },
    },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
