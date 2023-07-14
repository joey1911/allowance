import ProfileFormContainer from '@/components/profile/ProfileFormContainer'; // eslint-disable-line import/no-unresolved

export default function Page() {
  return (
    <>
      <h1>Profile</h1>
      {/* @ts-expect-error Server Component */}
      <ProfileFormContainer />
    </>
  )
};