import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  // email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
});

function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const data = values;
      const url = "https://63528ea9a9f3f34c37413c65.mockapi.io/users";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value);
    console.log(e.target);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.errors.name ?? null}</p>
      </div>
      <input type="submit" />
    </form>
  );
}

export default Form;
