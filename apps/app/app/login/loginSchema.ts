import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string({
    required_error: 'Email is required.'
  }).email({
    message: 'Invalid email address.'
  }),
  password: z.string().min(1, {
    message: 'Password is required.'
  }),
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>

export type LoginFormContextType = {
  register: (name: string, options?: any) => {} // eslint-disable-line no-unused-vars
}