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
import { updateProfile } from '@/actions/user';
import type { AccountProfile } from '@/types';
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

  const onSubmit: SubmitHandler<AccountProfile> = async (data) => {
    const updateProfileResults = await updateProfile(data, user.id);

    if (updateProfileResults.status === 'OK') {
      router.refresh();
    } else {
      alert(updateProfileResults.message);
    }
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
        <Label htmlFor="dob">Date of Birth</Label>
        <Input type="text" id="dob" {...register('dob', {
          required: 'Please enter your date of birth'
        })} aria-invalid={errors.dob ? 'true': 'false'} />
        {errors.dob?.message && (<span role="alert">{errors.dob.message}</span>)}
      </InputGroup>

      <AvatarUpload uid={user.id} url={profileData.avatar_url} size={150} onUpload={(url) => setValue('avatar_url', url) } />
      <input type="hidden" {...register('avatar_url')} value={profileData.avatar_url} />

      <p>
        <Button type="submit" size="lg" variant="primary">Submit</Button>
      </p>
    </form>
  )
};