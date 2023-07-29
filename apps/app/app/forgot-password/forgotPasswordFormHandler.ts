import { SubmitHandler } from 'react-hook-form';
import { forgotPassword } from '@/actions/auth';
import forgotPasswordState from './forgotPasswordState';
import type { ForgotPasswordFormSchemaType } from './forgotPasswordSchema';

const forgotPasswordFormHandler: SubmitHandler<ForgotPasswordFormSchemaType> = async ({ email }) => {
  const response = await forgotPassword(email);

  if (response.status === 'OK') {
    forgotPasswordState.step.set(2);
  } else {
    alert(response.message);
  }
};

export default forgotPasswordFormHandler;