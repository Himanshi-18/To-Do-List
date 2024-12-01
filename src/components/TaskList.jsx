import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTask, deleteTask } from "../redux/tasksSlice";

const TaskList = ({ filter }) => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    // Filter tasks based on the selected filter (Active, Completed, All)
    const filteredTasks = tasks.filter((task) => {
        if (filter === "Active") {
            return !task.completed; // Show only active tasks
        }
        if (filter === "Completed") {
            return task.completed; // Show only completed tasks
        }
        return true; // Show all tasks if filter is 'All'
    });

    return (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
            <thead>
                <tr style={{ backgroundColor: "#f5f5f5", textAlign: "left" }}>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Title</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Description</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {filteredTasks.map((task) => (
                    <tr
                        key={task.id}
                        style={{
                            textDecoration: task.completed ? "line-through" : "none",
                        }}
                    >
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                            {task.title}
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                            {task.description || "No description"}
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                            <button
                                onClick={() => dispatch(toggleTask(task.id))}
                                style={{
                                    marginRight: "10px",
                                    padding: "5px 10px",
                                    backgroundColor: task.completed ? "#ffc107" : "#28a745",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                }}
                            >
                                {task.completed ? "Undo" : "Complete"}
                            </button>
                            <button
                                onClick={() => dispatch(deleteTask(task.id))}
                                style={{
                                    padding: "5px 10px",
                                    backgroundColor: "#dc3545",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TaskList;
