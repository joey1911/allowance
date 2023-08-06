'use client'

import { useRouter } from 'next/navigation';
import { useSelector } from '@legendapp/state/react';
import useLoginForm from '../useLoginForm';
import LoginForm from './LoginForm';

export default function LoginContainer() {
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
    <LoginForm handler={loginFormHandler} errorMessage={errorMessage} />
  )
};