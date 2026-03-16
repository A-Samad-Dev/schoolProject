import { useFormik } from "formik";
import * as Yup from "yup";

const StudentForm = ({ initialValues, onSubmit, isEdit }) => {
  const formik = useFormik({
    initialValues,

    validationSchema: Yup.object({
      studentId: Yup.number().required("Student ID required"),

      firstname: Yup.string()
        .min(3, "Minimum 3 letters")
        .required("Firstname required"),

      lastname: Yup.string().min(3).required("Lastname required"),

      email: Yup.string().email("Invalid email").required("Email required"),

      phoneNumber: Yup.string().required("Phone required"),

      gender: Yup.string().required("Select gender"),

      presentClass: Yup.string().required("Select class"),

      department: Yup.string().required("Select department"),

      ...(!isEdit && {
        password: Yup.string().min(6).required("Password required"),

        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Confirm password"),
      }),
    }),

    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      <input
        name="studentId"
        placeholder="Student ID"
        value={formik.values.studentId}
        onChange={formik.handleChange}
      />

      <input
        name="firstname"
        placeholder="Firstname"
        value={formik.values.firstname}
        onChange={formik.handleChange}
      />

      <input
        name="lastname"
        placeholder="Lastname"
        value={formik.values.lastname}
        onChange={formik.handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />

      <input
        name="phoneNumber"
        placeholder="Phone"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
      />

      <select
        name="gender"
        value={formik.values.gender}
        onChange={formik.handleChange}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select
        name="presentClass"
        value={formik.values.presentClass}
        onChange={formik.handleChange}
      >
        <option value="">Select Class</option>
        <option value="Primary 1">Primary 1</option>
        <option value="Primary 2">Primary 2</option>
        <option value="Primary 3">Primary 3</option>
      </select>

      <select
        name="department"
        value={formik.values.department}
        onChange={formik.handleChange}
      >
        <option value="">Select Department</option>
        <option value="science">Science</option>
        <option value="commercial">Commercial</option>
        <option value="arts">Arts</option>
      </select>

      {!isEdit && (
        <>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
        </>
      )}

      <button
        type="submit"
        onClick={() => alert("student added successsfully!")}
        className="bg-blue-600 text-white p-2"
      >
        Save Student
      </button>
    </form>
  );
};

export default StudentForm;
