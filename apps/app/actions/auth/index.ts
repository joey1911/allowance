import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  getErrorMessage,
  reportError
} from '@allowance/utilities';
import type { Database } from '@/types/supabase';

export async function loginWithPassword(email: string, password: string) {
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

export async function signOut() {
  const supabase = createClientComponentClient<Database>();
  
  const { error } = await supabase.auth.signOut();

  if (!error) {
    return true;
  }

  return false;
};

export async function forgotPassword(email: string) {
  const supabase = createClientComponentClient<Database>();

  try {
    const response = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback?next=/dashboard/account`
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
    // Log password reset attempt
    // Email user that someone attempted to update their password
  }
}
/*
type ForgotPasswordResponse = Awaited<ReturnType<typeof forgotPassword>>
export type ForgotPasswordResponseSuccess = ForgotPasswordResponse['data']
export type ForgotPasswordResponseError = ForgotPasswordResponse['error']
*/