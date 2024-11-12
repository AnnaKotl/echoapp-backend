const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact');
const { errorHandler } = require('./helpers');

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use('/api', contactRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));