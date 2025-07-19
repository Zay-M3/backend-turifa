import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

app.get("/", (req, res) => {
  res.send("Server is runing");
});

export default app;
