const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
dotenv.config();

const app = express();

const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send('From get API');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});