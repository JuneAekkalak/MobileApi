require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

const authRoutes = require('./routes/auth');
const bodyRoutes = require('./routes/bodyType');
const symptomRoutes = require('./routes/symptom');
const diseaseRoutes = require('./routes/disease');
const profileRoutes = require('./routes/profile');
const dailyRoutes = require('./routes/dailyrecord');

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




app.use("/api/auth/",authRoutes);
app.use('/api/body/', bodyRoutes);
app.use('/api/symptom/', symptomRoutes);
app.use('/api/disease/', diseaseRoutes);
app.use('/api/profile/', profileRoutes);
app.use('/api/daily/', dailyRoutes);

app.listen(8000, () => {
    console.log(`Example app listening at http://localhost:8000`)
})