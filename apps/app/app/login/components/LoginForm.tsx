'use client'

import { useRouter } from 'next/navigation';
import { useSelector } from '@legendapp/state/react';
import { ReactForm } from '@allowance/bash-ui';
import {
  LoginFormSchema,
  type LoginFormSchemaType
} from '../loginSchema';
import LoginErrorHandler from './LoginErrorHandler';
import useLoginForm from '../useLoginForm';

export default function LoginForm() {
  const router = useRouter();
  const submitCallback = (response) => {
    // TODO: Log login attempt: log('login attempt', response.email, response.status, response.message)

    if (response.status === 'OK') {
      resetLoginState();
      router.replace('/dashboard');
    }
  }
  const {
    loginState,
    resetLoginState,
    loginFormHandler
  } = useLoginForm(submitCallback);
  const errorMessage = useSelector(loginState.error);

  return (
    <ReactForm<LoginFormSchemaType, typeof LoginFormSchema>
      onSubmit={loginFormHandler}
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