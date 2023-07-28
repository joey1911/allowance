import { SubmitHandler } from 'react-hook-form';
import signup from '@/actions/signup';
import signupState from './signupState';
import type { SignupFormSchemaType } from './signupSchema';

const signupFormHandler: SubmitHandler<SignupFormSchemaType> = async (data) => {
  const response = await signup(data.email, data.password);

  if (response.status === 'OK') {
    /*
    TODO: How do we setup an observer to handle "register event" so we can do things like
    - Log Signup
    - Send marketing email / follow up email
    - Subscribe to email list
    or, do we keep it KISS and just do it right here?
    */
    signupState.formData.set({
      email: data.email
    });
    signupState.step.set(2);
  } else {
    alert(response.message);
  }
};

export default signupFormHandler;