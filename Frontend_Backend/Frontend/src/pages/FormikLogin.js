import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup schema for email + password
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function Q6_FormikLogin() {
  return (
    <div>
      <h2>Q6 — Formik + Yup Login</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Formik Submit:", values);
          resetForm();
        }}
      >
        {() => (
          <Form className="card" style={{ maxWidth: "360px" }}>
            <div style={{ marginBottom: "10px" }}>
              <label>Email</label>
              <Field type="email" name="email" placeholder="Enter email" style={{ width: "100%", padding: "8px", marginTop: "6px" }} />
              <ErrorMessage name="email" component="div" style={{ color: "red", marginTop: "6px" }} />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Password</label>
              <Field type="password" name="password" placeholder="Enter password" style={{ width: "100%", padding: "8px", marginTop: "6px" }} />
              <ErrorMessage name="password" component="div" style={{ color: "red", marginTop: "6px" }} />
            </div>

            <button type="submit" style={{ padding: "8px 12px" }}>Login</button>
          </Form>
        )}
      </Formik>

      <p style={{ marginTop: "10px", color: "#555" }}>On submit, check the browser console to see the logged values.</p>
    </div>
  );
}
