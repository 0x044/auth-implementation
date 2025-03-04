import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import {PORT, DB_URL} from "./Config/index.js";
import Router from "./Routes/index.js";

const app = express();

app.use(cors());
app.disable("x-powered-by");
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// database connection

mongoose.promise = global.promise;
mongoose.set("strictQuery", false);

mongoose.connect(DB_URL).then(console.log("Connected to database")).catch((err)=> console.log(err));

Router(app);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});
