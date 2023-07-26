'use client'

import React from 'react';
import {
  Button,
  ReactForm
} from '@allowance/bash-ui';
import { SignupFormSchema, SignupFormSchemaType } from '../signupSchema';
import signupFormHandler from '../signupFormHandler';

export default function SignupForm() {
  return (
    <ReactForm<SignupFormSchemaType, typeof SignupFormSchema>
      onSubmit={signupFormHandler}
      schema={SignupFormSchema}
    >
      <ReactForm.Input<SignupFormSchemaType>
        displayName="Email"
        name="email"
        type="email"
      />
      <ReactForm.Input<SignupFormSchemaType>
        displayName="Password"
        name="password"
        type="password"
      />
      <ReactForm.Checkbox name="tos" text="I accept the Terms of Service" />
      <ReactForm.SubmitButton type="submit" size="lg" variant="primary">Signup</ReactForm.SubmitButton>
    </ReactForm>
  )
};