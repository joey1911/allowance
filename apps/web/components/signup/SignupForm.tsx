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
import { ObservablePrimitiveChildFns } from '@legendapp/state';
import signup, {
  type SignupResponseError
} from '../../actions/signup';

import type { SignupDataBasic } from '../../types/user';

export default function SignupForm({
  signupState
}: {
  signupState: ObservablePrimitiveChildFns<number>
}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupDataBasic>();

  const onSubmit: SubmitHandler<SignupDataBasic> = async (data) => {
    const {
      error
    }: {
      error: SignupResponseError
    } = await signup(data.email, data.password);

    if (error) {
      alert(error.message);
    } else {
      /*
      TODO: How do we setup an observer to handle "register event" so we can do things like
      - Log Signup
      - Send marketing email / follow up email
      - Subscribe to email list
      or, do we keep it KISS and just do it right here?
      */
      signupState.set(2);
    }
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