import { useContext } from "react";
import { SchoolContext } from "./Schoolcontext";

const DeleteModal = ({ student, close }) => {
  const { deleteStudent } = useContext(SchoolContext);

  const handleDelete = async () => {
    await deleteStudent(student.id);
    close();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded shadow w-[400px]">
        <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>

        <p className="mb-6">
          Are you sure you want to delete
          <b>
            {" "}
            {student.firstname} {student.lastname}
          </b>
          from the database?
          <br />
          <br />
          This will delete all information about this student.
        </p>

        <div className="flex gap-3 justify-end">
          <button onClick={close} className="bg-gray-300 px-4 py-2">
            No
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Yes Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
