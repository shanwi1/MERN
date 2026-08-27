import api from "./axios";

const register = async (user) => {
    const response = await api.post("/auth/register", user);
    return response.data;
};

const login = async (user) => {
    const response = await api.post("/auth/login", user);
    return response.data;
};

export { register, login };