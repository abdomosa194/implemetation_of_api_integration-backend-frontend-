import { useEffect, useState } from "react";
import AddStudent from "./addStudent";
import StudentTable from "./studentTable";
import type { Student } from "./utlis/data";
import { fetchStudents } from "./api/students";

function App() {
  const [students_list, setStudents] = useState<Student[]>([]); //distructuring the students array from useState same ( const [fst , snd] =  [1, 2] )
  
  useEffect(() => {
    fetchStudents().then((data) => {
      setStudents(data);
    });
  }, []);




  return (
   <>
     <StudentTable students = {students_list} />
     <AddStudent   setStudents= {setStudents} students = {students_list} />
    </>
  )
}

export default App;
