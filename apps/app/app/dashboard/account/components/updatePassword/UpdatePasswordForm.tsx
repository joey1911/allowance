'use client'

import { ReactForm } from '@allowance/bash-ui';
import UpdatePasswordErrorHandler from './UpdatePasswordErrorHandler';
import {
  UpdatePasswordFormSchema,
  type UpdatePasswordFormSchemaType
} from '../../updatePasswordSchema';
import updatePasswordFormHandler from '../../updatePasswordFormHandler';

export default function UpdatePasswordForm() {
  return (
    <ReactForm<UpdatePasswordFormSchemaType, typeof UpdatePasswordFormSchema>
      onSubmit={updatePasswordFormHandler}
      schema={UpdatePasswordFormSchema}
    >
      <UpdatePasswordErrorHandler />
      <ReactForm.Input<UpdatePasswordFormSchemaType>
        displayName="Password"
        name="password"
        type="password"
      />
      <ReactForm.SubmitButton type="submit" size="lg" variant="primary">Save</ReactForm.SubmitButton>
    </ReactForm>
  )
};