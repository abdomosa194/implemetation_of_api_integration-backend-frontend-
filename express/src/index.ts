  import express from "express";
  import mongoose from "mongoose";
  import studentRouter from "./Routers/students.ts";
  import cors from "cors";  


  
  const app = express();
  const PORT = 3000;

  app.use(cors({
    origin: "http://localhost:5173", // Adjust this to your frontend's URL
  }))
  app.use(express.json());

  mongoose.connect("mongodb://127.0.0.1:27017/students")
    .then(() => console.log("Connected!"))
    .catch(err => console.error(err));


  app.use("/students", studentRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
