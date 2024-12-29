import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [due, setDue] = useState('');

    const handleAddTask = () => {
        if (title.trim()) {
            onAddTask({ title, description, due });
            setTitle('');
            setDescription('');
            setDue('');
        }
    };

    return (
        <div className={styles.taskForm}>
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={styles.input}
            />
            <textarea
                placeholder="Task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.textarea}
            />
            <input
                type="date"
                value={due}
                onChange={(e) => setDue(e.target.value)}
                className={styles.input}
            />
            <button onClick={handleAddTask} className={styles.addButton}>
                Add Task
            </button>
        </div>
    );
};

export default TaskForm;
