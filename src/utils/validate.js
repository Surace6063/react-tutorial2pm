import * as yup from "yup"

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,20}$/;

export const registerFormValidationSchema = yup.object({
    first_name : yup.string().required("First name is required").min(3,"First name must be atleast three charcter"),
    last_name : yup.string().required("last name is required").min(3,"Last name must be atleast three charcter"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required.").matches(passwordRegex,"Weak password."),
    conform_password : yup.string().required("Conform password is required.")
    .oneOf([yup.ref("password")], "Password didnt match")
})