import signupState from '../signupState';

export default function SignupConfirmation() {
  const { email } = signupState.formData.get();

  return (
    <div>Thank you for signing up! Please check your email address {email} for the validation email to continue setting up your account.</div>
  )
};