import { SubmitHandler } from 'react-hook-form';
import signup, {
  type SignupResponseError
} from '@/actions/signup';
import signupState from './signupState';
import type { SignupFormSchemaType } from './signupSchema';

const signupFormHandler: SubmitHandler<SignupFormSchemaType> = async (data) => {
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
    signupState.step.set(2);
  }
};

export default signupFormHandler;