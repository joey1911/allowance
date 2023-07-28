import { z } from 'zod';

export const ForgotPasswordFormSchema = z.object({
  email: z.string({
    required_error: 'Email is required.'
  }).email({
    message: 'Invalid email address.'
  })
});

export type ForgotPasswordFormSchemaType = z.infer<typeof ForgotPasswordFormSchema>

export type ForgotPasswordFormContextType = {
  register: (name: string, options?: any) => {} // eslint-disable-line no-unused-vars
}