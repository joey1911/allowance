import { SubmitHandler } from 'react-hook-form';
import { useObservable } from '@legendapp/state/react';
import { forgotPassword } from '@/actions/auth';
import type { ForgotPasswordFormSchemaType } from './forgotPasswordSchema';

const useForgotPasswordForm = () => {
  const forgotPasswordState = useObservable({
    status: '',
    email: '',
    message: ''
  });

  function resetForgotPasswordState() {
    forgotPasswordState.status.set('');
    forgotPasswordState.email.set('');
    forgotPasswordState.message.set('');
  };

  const forgotPasswordFormHandler: SubmitHandler<ForgotPasswordFormSchemaType> = async ({ email }) => {
    const response = await forgotPassword(email);

    forgotPasswordState.email.set(email);
    forgotPasswordState.status.set(response.status);
    forgotPasswordState.message.set(response?.message);
  };

  return {
    forgotPasswordState,
    resetForgotPasswordState,
    forgotPasswordFormHandler
  };
};

export default useForgotPasswordForm;