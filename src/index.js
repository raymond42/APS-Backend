import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db";
import router from "./routes/index";
import { config } from "dotenv";

config();

const app = express();

//Connect to the db
connectDB();

//Init Middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Automating Processing System",
  });
});

app.use("/api/v1", router);
const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => console.log(`Server up on port ${port}`));

export default app;
