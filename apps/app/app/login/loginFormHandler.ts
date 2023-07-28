import { SubmitHandler } from 'react-hook-form';
import { loginWithPassword } from '@/actions/auth';
import type { LoginFormSchemaType } from './loginSchema';
import loginState from './loginState';

const loginFormHandler: SubmitHandler<LoginFormSchemaType> = async ({
  email,
  password
}) => {
  const response = await loginWithPassword(email, password);

  if (response.status === 'OK') {
    loginState.status.set(1);
  } else {
    loginState.error.set(response.message);
  }
};

export default loginFormHandler;