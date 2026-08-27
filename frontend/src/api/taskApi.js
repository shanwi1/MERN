import api from "./axios";

export const getTasks = async () => {
    const response = await api.get("/tasks/getTasks");

    return response.data;
};

export const createTask = async (form) => {
    const response = await api.post("/tasks/create", form);

    return response.data;
};

export const getTaskById = async (id) => {
    const response = await api.get(`/tasks/getTask/${id}`);

    return response.data;
};

export const updateTask = async (id, form) => {
    const response = await api.put(`/tasks/updateTask/${id}`, form);

    return response.data;
};

export const deleteTask = async (id) => {
    const response = await api.delete(`/tasks/deleteTask/${id}`);

    return response.data;
};