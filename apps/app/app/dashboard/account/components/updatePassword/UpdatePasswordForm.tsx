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
import { updatePassword } from '@/actions/user';

interface UpdatePasswordInput {
  password: string
}

export default function UpdatePasswordForm({
  callback
}: {
  callback?: Function // eslint-disable-line react/require-default-props
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<UpdatePasswordInput>();

  const onSubmit: SubmitHandler<UpdatePasswordInput> = async ({
    password
  }) => {
    const updatePasswordResults = await updatePassword(password);

    if (updatePasswordResults.status === 'OK') {
      if (callback) {
        callback();
      }
    } else {
      alert('There was an error updating your password');
      setValue('password', '');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label htmlFor="password">New Password</Label>
        <Input type="password" id="password" {...register('password', {
          required: 'Please enter a new password'
        })} aria-invalid={errors.password ? 'true': 'false'} />
        {errors.password?.message && (<span role="alert">{errors.password.message}</span>)}
      </InputGroup>
      <p>
        <Button type="submit" size="lg" variant="primary">Save</Button>
      </p>
    </form>
  )
};