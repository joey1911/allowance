'use client'

import React from 'react';
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
import type { User } from '@supabase/auth-helpers-nextjs';
import updateProfile from '@/actions/profile/updateProfile'; // eslint-disable-line import/no-unresolved
import type { AccountProfile } from '@/types/account';
import AvatarUpload from './AvatarUpload';

export default function ProfileForm({
  profileData,
  user
}: {
  profileData: AccountProfile
  user: User
}) {
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<AccountProfile>({
    defaultValues: profileData
  });

  const onSubmit: SubmitHandler<AccountProfile> = (data) => {
    updateProfile(data, user.id);
    router.refresh();
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
        <Input type="text" id="address" {...register('address', {
          required: 'Please enter your address'
        })} aria-invalid={errors.address ? 'true': 'false'} />
        {errors.address?.message && (<span role="alert">{errors.address.message}</span>)}
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
        <Input type="text" id="zipCode" {...register('zip_code', {
          required: 'Please enter your zip code'
        })} aria-invalid={errors.zip_code ? 'true': 'false'} />
        {errors.zip_code?.message && (<span role="alert">{errors.zip_code.message}</span>)}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="dob">Date of Birth</Label>
        <Input type="text" id="dob" {...register('dob', {
          required: 'Please enter your date of birth'
        })} aria-invalid={errors.dob ? 'true': 'false'} />
        {errors.dob?.message && (<span role="alert">{errors.dob.message}</span>)}
      </InputGroup>

      <AvatarUpload uid={user.id} url={profileData.avatar_url} size={150} onUpload={(url) => setValue('avatar_url', url) } />
      <input type="hidden" {...register('avatar_url')} value={profileData.avatar_url} />

      <p>
        <Button type="submit" size="large" color="primary">Submit</Button>
      </p>
    </form>
  )
};