import React, { useState } from "react";
import { login } from "../api/authApi";

const SignIn = () => {
    const [form, setForm] = useState({
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
            const data = await login(form);

            console.log(data);

            // Store JWT token
            localStorage.setItem("token", data.token);

            alert("Login successful");

        } catch (error) {
            console.log(error.response?.data);

            alert(
                error.response?.data?.msg ||
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div>
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit}>

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
                    Sign In
                </button>

            </form>
        </div>
    );
};

export default SignIn;