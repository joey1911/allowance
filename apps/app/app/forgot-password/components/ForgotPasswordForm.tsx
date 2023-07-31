'use client'

import React from 'react';
import { ReactForm } from '@allowance/bash-ui';
import {
  ForgotPasswordFormSchema,
  type ForgotPasswordFormSchemaType
} from '../forgotPasswordSchema';

export default function ForgotPasswordForm({
  handler
}: {
  handler: any
}) {
  return (
    <>
      <h1>Password Reset</h1>
      <p>Enter the email address associated with your account, and we&apos;ll send you a secure link to reset your password.</p>
      <ReactForm<ForgotPasswordFormSchemaType, typeof ForgotPasswordFormSchema>
        onSubmit={handler}
        schema={ForgotPasswordFormSchema}
      >
        <ReactForm.Input<ForgotPasswordFormSchemaType>
          displayName="Email"
          name="email"
          type="email"
        />
        <ReactForm.SubmitButton type="submit" size="lg" variant="primary">Reset Password</ReactForm.SubmitButton>
      </ReactForm>
    </>
  )
};