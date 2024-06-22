import express from 'express';
import dotenv from 'dotenv';


import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { join } from 'path';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


// View engine setup
app.set('views', join(process.cwd(), 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(join(process.cwd(), 'public')));
app.use(express.static(join(process.cwd(), 'uploads')));


// Routes
app.use('/', userRoutes);
app.use('/admin', adminRoutes);

// Server start
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
