import React, { useContext } from "react";
import { useNavigate } from "react-router";


import { SchoolContext } from "../Schoolcontext";
import StudentForm from "../Studentformprops";

const NewStudent = () => {
  const navigate = useNavigate();
  const { addStudent } = useContext(SchoolContext);

  const initialValues = {
    studentId: "",
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    gender: "",
    presentClass: "",
    department: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values) => {
    const { confirmPassword, ...data } = values;
    await addStudent(data);
    navigate("/students");
  };

  return (
    <StudentForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      isEdit={false}
    />
  );
};

export default NewStudent;
