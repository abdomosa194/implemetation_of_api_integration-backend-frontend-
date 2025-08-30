// like struct in C
export interface Student {
  _id?: string;   // MongoDB id
  name: string;
  age: string;
  email: string;
  class: string;
}

// Sample array of data

  export const students: Student[] = [
    { name: "John Doe", age: "20", email: "john@example.com", class: "CS101" },
    { name: "Jane Smith", age: "22", email: "jane@example.com", class: "CS102" },
    { name: "Ali Ahmed", age: "19", email: "ali@example.com", class: "CS103" }
  ];
