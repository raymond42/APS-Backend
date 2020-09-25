import express from "express";
import http from "http";
import cors from "cors";
import connectDB from "./config/db";
import router from "./routes/index";

const app = express();
app.use(cors());

//Connect to the db
connectDB();

//Init Middlware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Automating Processing System",
  });
});

app.use(router);
const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => console.log(`Server up on port ${port}`));

export default app;
