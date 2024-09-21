import express from 'express';
import mapRoutes from './routes/mapRoutes.js';
import userRoutes from './routes/clientRoutes.js';

const PORT = process.env.PORT || 5000; 
const app = express();
app.use(express.json());

app.use('/api/map', mapRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`App is listening on port http://localhost:${PORT}`);
})