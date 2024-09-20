import express from 'express';
import dotenv from 'dotenv';
import * as mapRoutes from './routes/mapRoutes.js';

const PORT = process.env.PORT || 5000; 
const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App is listening on port : ${PORT}`);
})