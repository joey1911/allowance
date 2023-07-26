import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormProvider,
  useForm,
  useFormContext
} from 'react-hook-form';
import { z } from 'zod';
import { InputGroup } from '../InputGroup';
import { Input as InputPrimitive } from '../Input';
import { Label } from '../Label';
import { Checkbox as CheckboxPrimitive } from '../Checkbox';
import { Button } from '../Button';

type GenericOnSubmit = (
  data: Record<string, any>,
  event?: React.BaseSyntheticEvent
) => void

export default function ReactForm<
  DataSchema extends Record<string, any>,
  Schema extends z.Schema<any, any>
>({
  schema,
  onSubmit,
  children,
  defaultValues
}: {
  schema: Schema,
  onSubmit: (data: DataSchema, event?: React.BaseSyntheticEvent) => void,
  children: any,
  defaultValues?: Record<string, any>
}) {
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(schema)
  });
  const handleSubmit = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit as GenericOnSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
};

ReactForm.Input = function Input<Model extends Record<string, any>>({
  name,
  displayName,
  type
}: {
  name: keyof Model,
  displayName: string,
  type: string
}) {
  const {
    register,
    formState: { isSubmitting, errors }
  } = useFormContext();

  return (
    <InputGroup>
      <Label htmlFor={`frm-${name.toString()}`}>{displayName}</Label>
      <InputPrimitive
        type={type}
        id={`frm-${name.toString()}`}
        {...register(name as string)}
        disabled={isSubmitting}
      />
      {errors[name as string] && (<span role="alert">{errors[name as string]?.message?.toString()}</span>)}
    </InputGroup>
  )
};

ReactForm.Checkbox = function Checkbox({
  name,
  text
}: {
  name: string,
  text: string
}) {
  const {
    register,
    formState: { isSubmitting, errors }
  } = useFormContext();

  return (
    <>
      <CheckboxPrimitive label={text} {...register(name)} aria-invalid={errors[name] ? 'true' : 'false'} disabled={isSubmitting} />
      {errors[name] && (<span role="alert">{errors[name]?.message?.toString()}</span>)}
    </>
  )
};

ReactForm.SubmitButton = function SubmitButton({
  type,
  variant,
  size,
  children,
  ...rest
}: {
  type: 'button' | 'reset' | 'submit',
  variant: 'primary' | 'secondary' | 'warning',
  size: 'sm' | 'md' | 'lg',
  children: React.ReactNode
}) {
  const {
    formState: { isSubmitting }
  } = useFormContext();

  return (
    <Button type={type} size={size} variant={variant} disabled={isSubmitting} {...rest}>{children}</Button>
  )
};