import { SubmitHandler } from 'react-hook-form';
import { forgotPassword } from '@/actions/auth';
import type { ForgotPasswordFormSchemaType } from './forgotPasswordSchema';

const forgotPasswordFormHandler: SubmitHandler<ForgotPasswordFormSchemaType> = async ({ email }) => {
  const response = await forgotPassword(email);

  if (response.status === 'OK') {
    // TODO: Switch this to state, show a better message
    alert('Check your email for link to reset password.');
  } else {
    alert(response.message);
  }
};

export default forgotPasswordFormHandler;