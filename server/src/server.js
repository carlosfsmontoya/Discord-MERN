import 'dotenv/config'
import app from "./app.js";
import { connectWithRetry } from './db.js';

connectWithRetry();

app.listen(process.env.BACKEND_PORT);

console.log(`Server listening on http://localhost:${process.env.BACKEND_PORT}`);