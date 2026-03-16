import { useNavigate } from "react-router";
import StudentTable from "../StudentTable";

const Students = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Students</h1>

        <button
          onClick={() => navigate("/admin/newstudent")}
          className="bg-green-600 text-white px-4 py-2"
        >
          Add Student
        </button>
      </div>

      <StudentTable />
    </div>
  );
};

export default Students;
