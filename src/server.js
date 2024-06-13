import express from "express";
import cors from "cors";
import { testConnection } from "./database/connection.js";
import { routes } from "./routes/index.routes.js";

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(port, ()=> {
    testConnection();
    console.log(`Server is running in port ${port}`)
})
