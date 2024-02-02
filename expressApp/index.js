import express from "express";
import cors from "cors";
import { port } from "./config.js";

const app = express();

if (process.env["NODE_ENV"] === "development") {
  console.log("dev mode!");
  app.use(cors());
}

app.get("/", (req, res) => {
  return res.json({
    status: 200,
    data: {
      message: "Hello from Express!"
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
