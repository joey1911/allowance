export default function ForgotPasswordConfirmation({
  email
}: {
  email: string
}) {
  return (
    <>
      <h1>Password reset link sent</h1>
      <p>A password reset link was sent to:</p>
      <p><strong>{email}</strong></p>
      <p>If you don&apos;t see it in a couple of minutes, check your spam folder. It was sent from support@allowance.com.</p>
      <p>Link: Back to sign-in</p>
      <p>Need help? Link: Visit our Help Center</p>
    </>
  )
};