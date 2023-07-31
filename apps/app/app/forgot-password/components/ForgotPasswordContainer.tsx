'use client'

import { useSelector } from '@legendapp/state/react';
import ForgotPasswordForm from './ForgotPasswordForm';
import ForgotPasswordConfirmation from './ForgotPasswordConfirmation';
import useForgotPasswordForm from '../useForgotPasswordForm';

export default function ForgotPasswordContainer() {
  const {
    forgotPasswordState,
    forgotPasswordFormHandler
  } = useForgotPasswordForm();
  const response = useSelector(forgotPasswordState);

  /* eslint-disable react/jsx-no-useless-fragment */
  return (
    <>
      {response.status === 'OK' ? (
        <ForgotPasswordConfirmation email={response?.email} />
      ) : (
        <ForgotPasswordForm handler={forgotPasswordFormHandler} />
      )}
    </>
  )
};