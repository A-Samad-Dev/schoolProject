import React, { useEffect, useState } from "react";
import { SchoolContext } from "./Schoolcontext";
import axios from "axios";

const SchoolProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const API = "http://localhost:3001/student";

  const getStudents = async () => {
    const res = await axios.get(API);
    console.log(res?.data);
    setStudents(res.data);
  };

  const addStudent = async (data) => {
    await axios.post(API, data);
    getStudents();
  };

  const updateStudent = async (id, data) => {
    await axios.put(`${API}/${id}`, data);
    getStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`${API}/${id}`);
    getStudents();
  };

  useEffect(() => {
    getStudents();
  }, []);

  const linkStyle = ({ isActive }) =>
    `relative transition-all duration-200 inline-block
    ${
      isActive
        ? "text-red-500 after:w-full"
        : "text-black hover:text-red-500 after:w-0 hover:after:w-full"
    }
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:bg-red-500 after:transition-all after:duration-200`;

  return (
    <SchoolContext.Provider
      value={{
        students,
        getStudents,
        addStudent,
        deleteStudent,
        updateStudent,
        linkStyle,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolProvider;
