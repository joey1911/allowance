'use client'

import { useRouter } from 'next/navigation';
import { observe } from '@legendapp/state';
import { ReactForm } from '@allowance/bash-ui';
import {
  LoginFormSchema,
  type LoginFormSchemaType
} from '../loginSchema';
import loginFormHandler from '../loginFormHandler';
import loginState, { resetLoginState } from '../loginState';
import LoginErrorHandler from './LoginErrorHandler';

export default function LoginForm() {
  const router = useRouter();

  const dispose = observe(loginState.status, (e) => {
    if (e.value === 1) {
      dispose();
      resetLoginState();
      router.replace('/dashboard');
    }
  });

  return (
    <ReactForm<LoginFormSchemaType, typeof LoginFormSchema>
      onSubmit={loginFormHandler}
      schema={LoginFormSchema}
    >
      <LoginErrorHandler />
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