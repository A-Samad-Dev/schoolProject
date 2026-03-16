import { useContext, useState } from "react";

import { useNavigate } from "react-router";

import { SchoolContext } from "./Schoolcontext";
import DeleteModal from "./DeleteConfirmation";

const StudentTable = () => {
  const { students } = useContext(SchoolContext);
  const navigate = useNavigate();

  const [selectedStudent, setSelectedStudent] = useState(null);
  console.log(students);

  return (
    <div className="w-full overflow-x-auto rounded-xl shadow-lg bg-white">
      <table className="min-w-full text-sm text-left text-gray-600 border">
        <thead className=" bg-red-100 text-xs uppercase text-gray-700">
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Class</th>
            <th className="px-6 py-3">Gender</th>
            <th className="px-6 py-3">Phone</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {students?.map((student) => (
            <tr key={student.id} className="text-center md:text-justify border">
              <td>{student.studentId}</td>

              <td>
                {student.firstname} {student.lastname}
              </td>

              <td>{student.email}</td>

              <td>{student.presentClass}</td>

              <td>{student.gender}</td>

              <td>{student.phoneNumber}</td>

              <td className="flex gap-2 justify-center items-center p-2 md:p-1  ">
                <button
                  onClick={() => navigate(`/admin/editstudent/${student.id}`)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs hover:scale-110 transition-all duration-400"
                >
                  Edit
                </button>

                <button
                  onClick={() => setSelectedStudent(student)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs hover:scale-110 transition-all duration-400"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedStudent && (
        <DeleteModal
          student={selectedStudent}
          close={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
};

export default StudentTable;
