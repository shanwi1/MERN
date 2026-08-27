import React, { useState } from "react";
import { register } from "../api/authApi";

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const data = await register(form);
        console.log(data);
        alert("Registration successful");
    } catch (error) {
        console.log(error.response?.data);
        alert(error.response?.data?.message || "Registration failed");
    }
};

    return (
        <div>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                />

                <button type="submit">
                    Sign Up
                </button>

            </form>
        </div>
    );
};

export default SignUp;