import { ProfileFormContainer } from './components';

export default function Page() {
  return (
    <>
      <h1>Profile</h1>
      {/* @ts-expect-error Server Component */}
      <ProfileFormContainer />
    </>
  )
};