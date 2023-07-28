import { useFormContext } from 'react-hook-form';
import { observer } from '@legendapp/state/react';
import loginState from '../loginState';

const LoginErrorHandler = observer(() => {
  const { setValue } = useFormContext();
  const errorMessage = loginState.error.get();

  if (errorMessage) {
    setValue('password', '');
  }

  return errorMessage ? <p>{errorMessage}</p> : null;
});

export default LoginErrorHandler;