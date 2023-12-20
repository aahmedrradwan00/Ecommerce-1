import { useFormik } from "formik";
import { loginSchema } from "../Schema/loginSchema";
import "./login-Css/login.css";
const SubmitFun = async (values, actions) => {
  console.log(values);
  console.log(actions);
  console.log("submited");
  await new Promise((resolve) => setInterval(resolve, 4000));
  actions.resetForm();
};

const LoginSignup = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmpassword: "",
      acceptedTos: false,
    },
    validationSchema: loginSchema,
    onSubmit: SubmitFun,
  });
  return (
    <div>
      <form
        className="w-[95%] max-w-[400px] mx-auto  "
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <label htmlFor="name">Name</label>
        <input
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="text"
          id="name"
          placeholder="Enter your Name"
          className={
            formik.errors.name && formik.touched.name ? "input-error" : ""
          }
        />
        {formik.errors.name && formik.touched.name && (
          <p className="error">{formik.errors.name}</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="email"
          id="email"
          placeholder="Enter your Email"
          className={
            formik.errors.email && formik.touched.email ? "input-error" : ""
          }
        />
        {formik.errors.email && formik.touched.email && (
          <p className="error">{formik.errors.email}</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="password"
          id="password"
          placeholder="Enter your password"
          className={
            formik.errors.password && formik.touched.password
              ? "input-error"
              : ""
          }
        />
        {formik.errors.password && formik.touched.password && (
          <p className="error">{formik.errors.password}</p>
        )}
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          value={formik.values.confirmpassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="password"
          id="confirmpassword"
          placeholder="Confirm password"
          className={
            formik.errors.confirmpassword && formik.touched.confirmpassword
              ? "input-error"
              : ""
          }
        />
        {formik.errors.confirmpassword && formik.touched.confirmpassword && (
          <p className="error">{formik.errors.confirmpassword}</p>
        )}

        <div className="checkbox flex items-center mt-[30px] ml-[8px] ">
          <input
            type="Checkbox"
            name="acceptedTos"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <span>I accept the terms of service</span>
        </div>
        {formik.errors.acceptedTos && formik.touched.acceptedTos && (
          <p className="error">{formik.errors.acceptedTos}</p>
        )}

        <button
          className="block my-[20px] bg-[#ff4141] rounded-[6px] w-[40%] py-[10px] px-[50px] text-white font-[600]  disabled:opacity-[50%] "
          disabled={!formik.isValid}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginSignup;
