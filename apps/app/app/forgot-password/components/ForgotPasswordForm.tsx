'use client'

import React from 'react';
import { ReactForm } from '@allowance/bash-ui';
import {
  ForgotPasswordFormSchema,
  type ForgotPasswordFormSchemaType
} from '../forgotPasswordSchema';
import forgotPasswordFormHandler from '../forgotPasswordFormHandler';

export default function ForgotPasswordForm() {
  return (
    <ReactForm<ForgotPasswordFormSchemaType, typeof ForgotPasswordFormSchema>
      onSubmit={forgotPasswordFormHandler}
      schema={ForgotPasswordFormSchema}
    >
      <ReactForm.Input<ForgotPasswordFormSchemaType>
        displayName="Email"
        name="email"
        type="email"
      />
      <ReactForm.SubmitButton type="submit" size="lg" variant="primary">Reset Password</ReactForm.SubmitButton>
    </ReactForm>
  )
};