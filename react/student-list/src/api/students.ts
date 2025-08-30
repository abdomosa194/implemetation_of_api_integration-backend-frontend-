import type { Student } from "../utlis/data";


export const fetchStudents = async() => {
   const response = await fetch("http://localhost:3000/students") 
   const data = await response.json();
   return data;


}
export const createStudent = async(data :Student) => {
     const response = await fetch("http://localhost:3000/students", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        });
    if (!response.ok) {
        throw new Error("Failed to create student");
    }   
    const newStudent = await response.json();
    return newStudent;

}