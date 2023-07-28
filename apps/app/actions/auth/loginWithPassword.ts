import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  getErrorMessage,
  reportError
} from '@allowance/utilities';
import type { Database } from '@/types/supabase';

export default async function loginWithPassword(email: string, password: string) {
  const supabase = createClientComponentClient<Database>();

  try {
    return await supabase.auth.signInWithPassword({
      email,
      password
    });
  } catch(error) {
    return error;
  } finally {
    // Log login attempt
  }
};

type LoginResponse = Awaited<ReturnType<typeof loginWithPassword>>
export type LoginResponseSuccess = LoginResponse['data']
export type LoginResponseError = LoginResponse['error']