import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTask = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (taskTitle) {
            const newTask = {
                id: Date.now(), // Unique ID based on the current timestamp
                title: taskTitle,
                description: taskDescription,
                completed: false,
            };
            dispatch(addTask(newTask));
            setTaskTitle(""); // Reset input field
            setTaskDescription(""); // Reset description field
        }
    };

    return (
        <div className="main row mt-5">

            <div className="task-title col-5">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
            </div>
            
            <div className="description col-6">
                <textarea
                    placeholder="Task Description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
            </div>
            
            <div className="col-1">
                <button onClick={handleAddTask} className="btn"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
};

export default AddTask;
