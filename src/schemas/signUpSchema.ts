import {z} from 'zod';

export const usernameValidation = z
.string()
.min(2,"Username must be at least 2 characters")
.max(20,"Username must be no more than 20 characters")
.regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")


export const singUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({
        message:'Invalid email address'
    }),
    password:z.string().min(6,{
        message:"Password at least 6 characters. One upper case,one lower case, one number, and one special character "
    })
})