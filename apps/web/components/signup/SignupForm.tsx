'use client'

import React from 'react';
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
import signup from '../../actions/signup';

import type { SignupDataBasic } from '../../types/user';
import { ObservablePrimitiveChildFns } from '@legendapp/state';

const SignupForm = ({
  signupState
}: {
  signupState: ObservablePrimitiveChildFns<number>
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupDataBasic>();

  const onSubmit: SubmitHandler<SignupDataBasic> = async (data) => {
    const response = await signup(data.email, data.password);
    signupState.set(1);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" {...register('email', {
          required: 'Please enter your email'
        })} aria-invalid={errors.email ? 'true': 'false'} />
        {errors.email?.message && (<span role="alert">{errors.email.message}</span>)}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" {...register('password', {
          required: 'Please enter a password'
        })} aria-invalid={errors.password ? 'true': 'false'} />
        {errors.password?.message && (<span role="alert">{errors.password.message}</span>)}
      </InputGroup>
      <p>
        <Button type="submit" size="large" color="primary">Signup</Button>
      </p>
    </form>
  )
};

export default SignupForm;