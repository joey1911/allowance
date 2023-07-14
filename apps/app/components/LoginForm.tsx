'use client'

import { useRouter } from 'next/navigation';
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
import { loginWithPassword } from '@/actions/auth'; // eslint-disable-line import/no-unresolved
import type { LoginResponseError } from '@/actions/auth';

interface LoginInput {
  email: string,
  password: string
}

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<LoginInput>();

  const onSubmit: SubmitHandler<LoginInput> = async ({
    email,
    password
  }) => {
    const {
      error
    }: {
      error: LoginResponseError
    } = await loginWithPassword(email, password);

    if (error) {
      alert('Username or password are incorrect');
      setValue('password', '');
    } else {
      router.refresh();
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
      <InputGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" {...register('password', {
          required: 'Please enter your password'
        })} aria-invalid={errors.password ? 'true': 'false'} />
        {errors.password?.message && (<span role="alert">{errors.password.message}</span>)}
      </InputGroup>
      <p>
        <Button type="submit" size="large" color="primary">Submit</Button>
      </p>
    </form>
  )
};