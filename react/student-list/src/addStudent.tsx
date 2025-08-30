import { Button, Paper, TextField } from "@mui/material";
import { type Student } from "./utlis/data";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { createStudent } from "./api/students";

interface Props {
  setStudents: Dispatch<SetStateAction<Student[]>>;
  students: Student[];
}
function AddStudent(props : Props) { 
  const [dataForm, Setform] = useState({ name : "",age: "",email: "",class: ""}) 
  

  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    Setform({...dataForm,[e.target.name]: e.target.value});
    
  }
  async function handleSubmit() {
      const data = await createStudent(dataForm); // assuming createStudent is an async function that sends data to the server
      props.setStudents([...props.students, data]); // using spread operator to add new student to the existing list
      Setform({ name: "", age: "", email: "", class: "" });
      
      }

  
useEffect(() => {
  if(dataForm.name == "admin") {
    alert("Admin cannot be added as a student");
     // Reset form if admin is entered
  }
}, [dataForm.name]);


  return (
      <Paper sx={{ padding: 2, margin: 2, display: "flex", flexDirection: "column", gap: 2 , maxWidth: 400  }}>
      <TextField id="name" label="Name" name="name" value={dataForm.name} onChange={handleChange} />
      <TextField id="age" label="Age" name="age" value={dataForm.age} onChange={handleChange} />
      <TextField id="email" label="Email" name="email" value={dataForm.email} onChange={handleChange} />
      <TextField id="class" label="Class" name="class" value={dataForm.class} onChange={handleChange} />

      
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Paper>
  );
}

export default AddStudent;
