import { SubmitHandler } from 'react-hook-form';
import { useObservable } from '@legendapp/state/react';
import { loginWithPassword } from '@/actions/auth';
import type { LoginFormSchemaType } from './loginSchema';

const useLoginForm = (callback) => {
  const loginState = useObservable({
    error: ''
  });

  const resetLoginState = () => {
    loginState.error.set('');
  };

  const loginFormHandler: SubmitHandler<LoginFormSchemaType> = async ({
    email,
    password
  }: {
    email: string,
    password: string
  }) => {
    const response = await loginWithPassword(email, password);

    if (response.status === 'Error') {
      loginState.error.set(response.message);
    }

    callback({
      email,
      status: response.status,
      message: response?.message
    });
  }

  return {
    loginState,
    resetLoginState,
    loginFormHandler
  };
};

export default useLoginForm;