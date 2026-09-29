import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Tracker.css';

const Tracker = () => {
    const [task, setTask] = useState([
        { ta: "20 DSA Question", id: uuidv4(), isdone: false }
    ]);

    const [newtask, setnewTask] = useState("");

    const addtask = () => {
        if (newtask.trim() === "") return;

        setTask([
            ...task,
            {
                ta: newtask,
                id: uuidv4(),
                isdone: false
            }
        ]);

        setnewTask("");
    };

    const deltask = (id) => {
        setTask(task.filter((tasks) => tasks.id !== id));
    };

    const markall = () => {
        setTask(
            task.map((tasks) => ({
                ...tasks,
                isdone: true
            }))
        );
    };

    const markdone = (id) => {
        setTask(
            task.map((tasks) =>
                tasks.id === id
                    ? { ...tasks, isdone: true }
                    : tasks
            )
        );
    };

    return (
        <div className="container">
            <h1>Interview Preparation Tracker</h1>

            <hr />

            <h3>Add Task to Crack the Interview</h3>

            <input
                type="text"
                placeholder="Enter Your Task"
                value={newtask}
                onChange={(e) => setnewTask(e.target.value)}
            />

            <button className="add-btn" onClick={addtask}>
                Add a Task
            </button>

            <hr />

            <ul>
                {task.map((tasks) => (
                    <li key={tasks.id}>
                        <span
                            style={
                                tasks.isdone
                                    ? { textDecoration: "line-through" }
                                    : {}
                            }
                        >
                            {tasks.ta}
                        </span>

                        <button
                            className="delete-btn"
                            onClick={() => deltask(tasks.id)}
                        >
                            Remove Task
                        </button>

                        <button
                            className="add-btn"
                            onClick={() => markdone(tasks.id)}
                        >
                            Mark As Done
                        </button>
                    </li>
                ))}
            </ul>

            <button className="all-btn" onClick={markall}>
                Mark All as Done
            </button>
        </div>
    );
};

export default Tracker;