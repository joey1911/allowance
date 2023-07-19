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
import type { VerificationInformation } from '@/types/account';

export default function VerifyIdentityForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<VerificationInformation>();

  const onSubmit: SubmitHandler<VerificationInformation> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label htmlFor="firstName">First Name</Label>
        <Input type="text" id="firstName" {...register('first_name', {
          required: 'Please enter your first name'
        })} aria-invalid={errors.first_name ? 'true': 'false'} />
        {errors.first_name?.message && (<span role="alert">{errors.first_name.message}</span>)}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="lastName">Last Name</Label>
        <Input type="text" id="lastName" {...register('last_name', {
          required: 'Please enter your last name'
        })} aria-invalid={errors.last_name ? 'true': 'false'} />
        {errors.last_name?.message && (<span role="alert">{errors.last_name.message}</span>)}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="address">Address</Label>
        <Input type="text" id="address" {...register('address1', {
          required: 'Please enter your address'
        })} aria-invalid={errors.address1 ? 'true': 'false'} />
        {errors.address1?.message && (<span role="alert">{errors.address1.message}</span>)}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="address2">Address Line 2</Label>
        <Input type="text" id="address2" {...register('address2')} />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="city">City</Label>
        <Input type="text" id="city" {...register('city', {
          required: 'Please enter your city'
        })} aria-invalid={errors.city ? 'true': 'false'} />
        {errors.city?.message && (<span role="alert">{errors.city.message}</span>)}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="state">State</Label>
        <Input type="text" id="state" {...register('state', {
          required: 'Please enter your state'
        })} aria-invalid={errors.state ? 'true': 'false'} />
        {errors.state?.message && (<span role="alert">{errors.state.message}</span>)}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="zipCode">Zip Code</Label>
        <Input type="text" id="zipCode" {...register('postal_code', {
          required: 'Please enter your zip code'
        })} aria-invalid={errors.postal_code ? 'true': 'false'} />
        {errors.postal_code?.message && (<span role="alert">{errors.postal_code.message}</span>)}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="dob">Date of Birth</Label>
        <Input type="text" id="dob" {...register('birth_date', {
          required: 'Please enter your date of birth'
        })} aria-invalid={errors.birth_date ? 'true': 'false'} />
        {errors.birth_date?.message && (<span role="alert">{errors.birth_date.message}</span>)}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="ssn">Social Security Number</Label>
        <Input type="password" id="ssn" {...register('ssn', {
          required: 'Please enter your social security number'
        })} aria-invalid={errors.ssn ? 'true': 'false'} />
        {errors.ssn?.message && (<span role="alert">{errors.ssn.message}</span>)}
      </InputGroup>
      <p>
        <Button type="submit" size="lg" variant="primary">Submit</Button>
      </p>
    </form>
  )
};