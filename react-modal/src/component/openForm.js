import React from "react";
import { TextField, Button, Box, Typography, TextareaAutosize,} from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import SelectInput from "@mui/material/Select/SelectInput";




const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter name'),
//   select: Yup.select().required('Please enter password'),
  email: Yup.string().email('Invalid email').required('Please enter email'),
  textarea: Yup.string()
    .min(15, 'To Short!').required('Please enter your message')
});

const initalValues = {
  email: "",
  name: "",
  select: "",
  textarea: "",
};

const OpenForm = () => {

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post('http://localhost:3033/users', values);
      resetForm();
      alert('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="MaterialForm">
      <Typography variant="subtitle1" b>
      Form for User
      </Typography>
      <Box height={20} />
      <Formik
        initialValues={initalValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, isValid, touched }) => (
          <Form>            
            <Field
              name="name"
              type="name"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Name"
              fullWidth
              error={Boolean(errors.name) && Boolean(touched.name)}
              helperText={Boolean(touched.name) && errors.name}
            />
            <Box height={20} />
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email"
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={20} />

            <Field
              name="select"
              type="select"
              as={SelectInput}
              variant="outlined"
              color="primery"
              label="Select"
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={20} />

            <Field
              name="textarea"
              type="textarea"
              as={TextareaAutosize}
              variant="outlined"
              color="primary"
              label= "Textarea"
              placeholder="Textarea"
              // fullWidth
              error={Boolean(errors.textarea) && Boolean(touched.textarea)}
              helperText={Boolean(touched.textarea) && errors.textarea}
              style={{
                width: "100%",
                height: "150px",
                padding: "12px 20px",
                boxSizing: "border-box",
                // border: "2px solid #ccc",
                borderRadius: "4px",
                // backgroundColor: "#f8f8f8",
                fontSize: "16px",
                resize: "none"
              }}
              
            />

            <Box height={20} />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid}
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OpenForm;