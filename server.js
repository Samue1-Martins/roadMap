import express from "express";

const port = 3000;
const app = express();

app.use(express.json());
app.use(routes);


app.listen(port, ()=> {
    testConnection();
    console.log(`Server is running in port ${port}`)
})
