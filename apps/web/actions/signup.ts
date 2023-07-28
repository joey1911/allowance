import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  getErrorMessage,
  reportError
} from '@allowance/utilities';
import type { Database } from '@/types/supabase';

export default async function signup(
  email: string,
  password: string
) {
  const supabase = createClientComponentClient<Database>();

  try {
    const response = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          onboardStep: 0
        },
        emailRedirectTo: `${process.env['NEXT_PUBLIC_APP_URL']}/api/auth/callback`
      }
    });

    return {
      status: 'OK',
      data: response
    };
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    reportError({ message: errorMessage });

    return {
      status: 'Error',
      message: errorMessage
    };
  } finally {
    // Log user signup
  }
};
/*
type SignupResponse = Awaited<ReturnType<typeof signup>>
export type SignupResponseSuccess = SignupResponse['data']
export type SignupResponseError = SignupResponse['error']
*/