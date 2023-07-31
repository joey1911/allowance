import { z } from 'zod';

export const UpdatePasswordFormSchema = z.object({
  password: z.string().min(6, {
    message: 'Password is required and needs to be at least 6 characters long.'
  })
});

export type UpdatePasswordFormSchemaType = z.infer<typeof UpdatePasswordFormSchema>

export type UpdatePasswordFormContextType = {
  register: (name: string, options?: any) => {} // eslint-disable-line no-unused-vars
}