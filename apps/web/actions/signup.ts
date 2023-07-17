import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Database } from '../types/supabase';

export default async function signup(
  email: string,
  password: string
) {
  const supabase = createClientComponentClient<Database>();

  try {
    return await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          onboardStep: 0
        },
        emailRedirectTo: `${process.env['NEXT_PUBLIC_API_URL']}/api/auth/callback`
      }
    });
  } catch (error) {
    return error;
  } finally {
    // Log user signup
  }
};

type SignupResponse = Awaited<ReturnType<typeof signup>>
export type SignupResponseSuccess = SignupResponse['data']
export type SignupResponseError = SignupResponse['error']