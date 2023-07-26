import { z } from 'zod';

export const SignupFormSchema = z.object({
  email: z.string({
    required_error: 'Email is required.'
  }).email({
    message: 'Invalid email address.'
  }),
  password: z.string().min(1, {
    message: 'Password is required.'
  }),
  tos: z.literal(true, {
    errorMap: () => ({
      message: 'You must accept the Terms of Service.'
    })
  })
});

export type SignupFormSchemaType = z.infer<typeof SignupFormSchema>

export type SignupFormContextType = {
  register: (name: string, options?: any) => {} // eslint-disable-line no-unused-vars
}