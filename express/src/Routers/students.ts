import express from "express";
import StudentModel from "../models/student.ts";

const router = express.Router();

// GET all students
router.get("/", async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: "Error fetching students" });
  }
});

// GET student by ID
router.get("/:id", async (req, res) => {
  const studentId = req.params.id;
  const student = await StudentModel.findById(studentId);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json(student);
});

// UPDATE student
router.put("/:id", async (req, res) => {
  const studentId = req.params.id;
  const data = req.body;
  const updatedStudent = await StudentModel.findByIdAndUpdate(studentId, data, { new: true });
  if (!updatedStudent) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json(updatedStudent);
});

// CREATE student
router.post("/", async (req, res) => {
  const data = req.body;
  const newStudent = await StudentModel.create(data);
  res.status(201).json(newStudent);
});



// DELETE student
router.delete("/:id", async (req, res) => {
  const studentId = req.params.id;
  const deletedStudent = await StudentModel.findByIdAndDelete(studentId);
  if (!deletedStudent) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json({ message: "Student deleted successfully" });
});

export default router;
