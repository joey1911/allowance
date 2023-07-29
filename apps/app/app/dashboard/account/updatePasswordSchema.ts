import { z } from 'zod';

export const UpdatePasswordFormSchema = z.object({
  password: z.string().min(1, {
    message: 'Password is required.'
  })
});

export type UpdatePasswordFormSchemaType = z.infer<typeof UpdatePasswordFormSchema>

export type UpdatePasswordFormContextType = {
  register: (name: string, options?: any) => {} // eslint-disable-line no-unused-vars
}