import { useFormContext } from 'react-hook-form';

export default function LoginErrorHandler({
  message
}: {
  message: string
}) {
  const { setValue } = useFormContext();

  if (message) {
    setValue('password', '');
  }

  return message ? <p>{message}</p> : null;
};