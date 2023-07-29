import { useFormContext } from 'react-hook-form';
import { observer } from '@legendapp/state/react';
import updatePasswordState from '../../updatePasswordState';

const UpdatePasswordErrorHandler = observer(() => {
  const { setValue } = useFormContext();
  const errorMessage = updatePasswordState.error.get();

  if (errorMessage) {
    setValue('password', '');
  }

  return errorMessage ? <p>{errorMessage}</p> : null;
});

export default UpdatePasswordErrorHandler;