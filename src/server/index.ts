import {config} from "dotenv";
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dummyRoutes from "./routes/dummyRoutes"

config({})

const app = express();
const PORT = process.env.SERVER_PORT || 4000;

app.use(cors({origin: process.env.CLIENT_URL}));

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        limit: 100, // Limit each IP to 100 requests per window
    })
);

app.use('/api/dummy', dummyRoutes);

app.listen(PORT, () => {
    console.log(`Express proxy running on port ${PORT}`);
});
