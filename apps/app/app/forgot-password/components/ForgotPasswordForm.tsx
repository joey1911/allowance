'use client'

import {
  useForm,
  SubmitHandler
} from 'react-hook-form';
import {
  Label,
  Input,
  InputGroup,
  Button
} from '@allowance/bash-ui';
import { forgotPassword } from '@/actions/auth';
import type { ForgotPasswordResponseError } from '@/actions/auth';

interface ForgotPasswordInput {
  email: string
}

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordInput>();

  const onSubmit: SubmitHandler<ForgotPasswordInput> = async ({ email }) => {
    const {
      error
    }: {
      error: ForgotPasswordResponseError
    } = await forgotPassword(email);

    if (error) {
      alert('There was an error resetting your password');
    } else {
      alert('Check your email for password reset link');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label htmlFor="email">Email Address</Label>
        <Input type="email" id="email" {...register('email', {
          required: 'Please enter your email address'
        })} aria-invalid={errors.email ? 'true': 'false'} />
        {errors.email?.message && (<span role="alert">{errors.email.message}</span>)}
      </InputGroup>
      <p>
        <Button type="submit" size="lg" variant="primary">Reset Password</Button>
      </p>
    </form>
  )
};