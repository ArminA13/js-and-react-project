import React from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
    TextareaAutosize,


} from "@mui/material";
import { Field, Form, Formik, } from "formik";
import * as Yup from "yup";
import axios from "axios";


const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Please enter name"),
    select: Yup.string().required("Please select gender"),    
    email: Yup.string().email("Invalid email").required("Please enter email"),

    textarea: Yup.string()
        .min(10, "To Short!")
        .required("Please enter your message"),
});

const initalValues = {
    name: "",
    email: "",
    select: "",
    textarea: "",
};

const OpenForm = () => {
    const handleSubmit = async (values, { resetForm }) => {
        try {
            await axios.post("http://localhost:3036/users", values);
            resetForm();
            alert("The form has been succesfully!");
        } catch (error) {
            console.error("Ooop, something wasn't right:", error);
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
                            as="select"
                            variant="outlined"
                            color="primary"
                            label="Select"
                            fullWidth
                            error={Boolean(errors.select) && Boolean(touched.select)}
                            helperText={Boolean(touched.select) && errors.select}
                            style={{
                                width: "100%",
                                height: "50px",
                                padding: "12px 20px",
                                boxSizing: "border-box",
                                borderRadius: "4px",
                                fontSize: "16px",
                                resize: "none",
                            }}
                        >
                            <option value="">Select Gender</option>
                            <option value="option1">Male</option>
                            <option value="option2">Female</option>

                        </Field>
                        
                        <Box height={20} />

                        <Field
                            name="textarea"
                            type="textarea"
                            as={TextareaAutosize}
                            variant="outlined"
                            color="primary"
                            label="Textarea"
                            placeholder="Textarea"
                            fullWidth
                            error={Boolean(errors.textarea) &&Boolean(touched.textarea)}
                            helperText={Boolean(touched.textarea) && errors.textarea}
                            style={{
                                width: "100%",
                                height: "150px",
                                padding: "12px 20px",
                                boxSizing: "border-box",
                                borderRadius: "4px",
                                fontSize: "16px",
                                resize: "none",
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
