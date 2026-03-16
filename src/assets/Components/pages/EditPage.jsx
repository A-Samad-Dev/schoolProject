import { useParams, useNavigate } from "react-router";
import { useContext } from "react";

import StudentForm from "../Studentformprops";
import { SchoolContext } from "../Schoolcontext";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students, updateStudent } = useContext(SchoolContext);

  const student = students.find((s) => s.id === id);

  const handleSubmit = async (values) => {
    await updateStudent(id, values);
    navigate("/admin");
  };

  return (
    <StudentForm
      initialValues={student}
      onSubmit={handleSubmit}
      isEdit={true}
    />
  );
};

export default EditStudent;
