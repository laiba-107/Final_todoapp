import React from "react";

function TaskColumn({ column }) {
    return (
        <div className="card shadow-sm">
            <div className="card-header text-center bg-secondary text-white">
                <h5>{column.title}</h5>
            </div>
            <div className="card-body">
                {column.tasks.map((task, index) => (
                    <div className="border p-2 mb-2" key={index}>
                        <h6>{task.title}</h6>
                        <p>{task.description}</p>
                        <small className="text-muted">Due: {task.dueDate}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskColumn;
