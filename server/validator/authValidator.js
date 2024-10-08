import { z } from "zod";

//Creating an object schema for signUp
const signupSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(4, { message: "Password must be at least 4 characters" })
        .max(1024, { message: "password must not be more than 1024 characters" }),
});

export default signupSchema;