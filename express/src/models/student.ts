import mongoose, { Schema, Document } from "mongoose";

interface IStudent extends Document {
  name: string;
  age: string;
  email: string;
}

const studentSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  email: { type: String},
});

const StudentModel = mongoose.model<IStudent>("Student", studentSchema);

export default StudentModel;
