'use client'

import { ReactForm } from '@allowance/bash-ui';
import {
  UpdatePasswordFormSchema,
  type UpdatePasswordFormSchemaType
} from '../../updatePasswordSchema';

export default function UpdatePasswordForm({
  handler
}: {
  handler: any
}) {
  return (
    <ReactForm<UpdatePasswordFormSchemaType, typeof UpdatePasswordFormSchema>
      onSubmit={handler}
      schema={UpdatePasswordFormSchema}
    >
      <ReactForm.Input<UpdatePasswordFormSchemaType>
        displayName="Password"
        name="password"
        type="password"
      />
      <ReactForm.SubmitButton type="submit" size="lg" variant="primary">Save</ReactForm.SubmitButton>
    </ReactForm>
  )
};