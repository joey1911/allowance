import { SubmitHandler } from 'react-hook-form';
import { updatePassword } from '@/actions/user';
import type { UpdatePasswordFormSchemaType } from './updatePasswordSchema';
import updatePasswordState from './updatePasswordState';

const updatePasswordFormHandler: SubmitHandler<UpdatePasswordFormSchemaType> = async ({
  password
}) => {
  const response = await updatePassword(password);

  if (response.status === 'OK') {
    updatePasswordState.step.set(2);
  } else {
    updatePasswordState.error.set(response.message);
  }
};

export default updatePasswordFormHandler;