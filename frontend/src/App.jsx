import React from "react";
import { Routes, Route } from "react-router-dom";

import User from "./components/User";
import State from "./components/State";
import Form from "./components/Form";
import Effect from "./components/Effect";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import SignIn from "./pages/SignIn";
import Task from "./pages/Task";

import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";

const App = () => {
    return (
        <>
            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/services" element={<Services />} />

                <Route path="/forms" element={<Form />} />

                <Route path="/effects" element={<Effect />} />

                <Route path="/state" element={<State />} />

                <Route path="/user" element={<User />} />

                <Route path="/login" element={<SignIn />} />

                <Route path="/products" element={<Product />} />

                <Route
                    path="/products/:id"
                    element={<ProductDetails />}
                />

                <Route path="/tasks" element={<Task />} />

            </Routes>
        </>
    );
};

export default App;