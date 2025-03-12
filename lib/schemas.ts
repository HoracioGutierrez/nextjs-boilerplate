import * as yup from 'yup';

export const userSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
});

export type SignUpUser = yup.InferType<typeof userSchema>;