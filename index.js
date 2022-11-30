require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

const authRoutes = require('./routes/auth');


const morgan = require("morgan");
const app = express()

mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB CONNECT ERROR: ", err));

// middlewares 
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors())
app.use(express.json());




app.use("/api",authRoutes);
// app.use('/api', authRoutes);

app.listen(8000, () => {
    console.log(`Example app listening at http://localhost:8000`)
})