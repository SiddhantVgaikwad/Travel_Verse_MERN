import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { mongoDBconnect } from "./config/mongoDBConn.js";
import tourRoute from './routes/tourRoute.js'
import userRoute from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'
import reviewRoute from './routes/reviewRoute.js'
import bookingRoute from './routes/bookingRoute.js'

//


dotenv.config();
const app = express();
const port = process.env.PORT


//middleware
app.use(express.json())
// app.use(cors(corsOptions));
app.use(cors({
    origin: 'https://travel-verse-mern-frontend.onrender.com',
    credentials: true, // This is crucial!
}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/tours', tourRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/review', reviewRoute)
app.use('/api/v1/booking', bookingRoute)

//



app.listen(port, () => {
    mongoDBconnect();
    console.log(`${port} is running`)
})

