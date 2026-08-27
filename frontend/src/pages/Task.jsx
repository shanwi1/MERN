import React, { useEffect, useState } from "react";
import {
    getTasks,
    createTask,
    deleteTask
} from "../api/taskApi";

const Task = () => {

    const [tasks, setTasks] = useState([]);

    const [form, setForm] = useState({
        title: "",
        description: "",
        status: "Pending"
    });

    // GET ALL TASKS
    const loadTasks = async () => {
        try {

            const data = await getTasks();

            console.log("Tasks from backend:", data);

            setTasks(data);

        } catch (error) {

            console.log(
                "GET TASK ERROR:",
                error.response?.data || error.message
            );

        }
    };

    useEffect(() => {
        loadTasks();
    }, []);

    // INPUT
    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    // CREATE
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = await createTask(form);

            console.log("Created task:", data);

            alert("Task created successfully");

            setForm({
                title: "",
                description: "",
                status: "Pending"
            });

            loadTasks();

        } catch (error) {

            console.log(
                "CREATE ERROR:",
                error.response?.data || error.message
            );

        }
    };

    // DELETE
    const handleDelete = async (id) => {

        try {

            await deleteTask(id);

            alert("Task deleted");

            loadTasks();

        } catch (error) {

            console.log(
                "DELETE ERROR:",
                error.response?.data || error.message
            );

        }
    };

    return (
        <div>

            <h1>Task Management</h1>

            <h2>Create Task</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="Task title"
                    value={form.title}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Task description"
                    value={form.description}
                    onChange={handleChange}
                />

                <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <button type="submit">
                    Create Task
                </button>

            </form>

            <hr />

            <h2>My Tasks</h2>

            {tasks.length === 0 ? (

                <p>No tasks found</p>

            ) : (

                tasks.map((task) => (

                    <div key={task._id}>

                        <h3>{task.title}</h3>

                        <p>
                            Description: {task.description}
                        </p>

                        <p>
                            Status: {task.status}
                        </p>

                        <button
                            onClick={() => handleDelete(task._id)}
                        >
                            Delete
                        </button>

                        <hr />

                    </div>

                ))

            )}

        </div>
    );
};

export default Task;