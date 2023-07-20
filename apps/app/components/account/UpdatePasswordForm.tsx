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
import { updatePassword } from '@/actions/auth'; // eslint-disable-line import/no-unresolved
import type { UpdatePasswordResponseError } from '@/actions/auth';

interface UpdatePasswordInput {
  password: string,
  confirmPassword: string,
}

export default function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<UpdatePasswordInput>();

  const onSubmit: SubmitHandler<UpdatePasswordInput> = async ({
    password
  }) => {
    const {
      error
    }: {
      error: UpdatePasswordResponseError
    } = await updatePassword(password);

    if (error) {
      alert('There was an error updating your password');
    } else {
      alert('Password updated');
    }

    setValue('password', '');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label htmlFor="password">New Password</Label>
        <Input type="password" id="password" {...register('password', {
          required: 'Please enter a new password'
        })} aria-invalid={errors.password ? 'true' : 'false'} />
        {errors.password?.message && (<span role="alert">{errors.password.message}</span>)}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="confirmPassword">Confirm New Password</Label>
        <Input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', {
            required: 'Password does not match'
          })} aria-invalid={errors.confirmPassword ? 'true' : 'false'}
        />
        {errors.confirmPassword?.message && (<span role="alert">{errors.confirmPassword.message}</span>)}
      </InputGroup>
      <p>
        <Button type="submit" size="lg" variant="primary" disabled={password.length < 7 || password !== confirmPassword}>Submit</Button>
      </p>
    </form>
  );
};