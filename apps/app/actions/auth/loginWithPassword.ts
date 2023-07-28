import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  getErrorMessage,
  reportError
} from '@allowance/utilities';
import type { Database } from '@/types/supabase';

export default async function loginWithPassword(email: string, password: string) {
  const supabase = createClientComponentClient<Database>();

  try {
    const response = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (!response.error) {
      return {
        status: 'OK',
        data: response
      };
    }

    throw new Error(response.error.message);
  } catch(error) {
    const errorMessage = getErrorMessage(error);
    reportError({ message: errorMessage });
  
    return {
      status: 'Error',
      message: errorMessage
    };
  } finally {
    // Log login attempt
  }
};
/*
type LoginResponse = Awaited<ReturnType<typeof loginWithPassword>>
export type LoginResponseSuccess = LoginResponse['data']
export type LoginResponseError = LoginResponse['error']
*/