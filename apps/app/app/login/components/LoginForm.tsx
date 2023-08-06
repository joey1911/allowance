'use client'

import { ReactForm } from '@allowance/bash-ui';
import {
  LoginFormSchema,
  type LoginFormSchemaType
} from '../loginSchema';
import LoginErrorHandler from './LoginErrorHandler';

export default function LoginForm({
  handler,
  errorMessage = ''
}: {
  handler: any,
  errorMessage?: string // eslint-disable-line react/require-default-props
}) {
  return (
    <ReactForm<LoginFormSchemaType, typeof LoginFormSchema>
      onSubmit={handler}
      schema={LoginFormSchema}
    >
      <LoginErrorHandler message={errorMessage} />
      <ReactForm.Input<LoginFormSchemaType>
        displayName="Email"
        name="email"
        type="email"
      />
      <ReactForm.Input<LoginFormSchemaType>
        displayName="Password"
        name="password"
        type="password"
      />
      <ReactForm.SubmitButton type="submit" size="lg" variant="primary">Login</ReactForm.SubmitButton>
    </ReactForm>
  )
};