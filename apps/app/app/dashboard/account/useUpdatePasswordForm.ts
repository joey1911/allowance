import { SubmitHandler } from 'react-hook-form';
import { updatePassword } from '@/actions/auth';
import type { UpdatePasswordFormSchemaType } from './updatePasswordSchema';

const useUpdatePasswordForm = (callback) => {
  const updatePasswordFormHandler: SubmitHandler<UpdatePasswordFormSchemaType> = async ({
    password
  }) => {
    const response = await updatePassword(password);

    callback({
      status: response.status,
      message: response?.message
    });
  };

  return {
    updatePasswordFormHandler
  };
};

export default useUpdatePasswordForm;