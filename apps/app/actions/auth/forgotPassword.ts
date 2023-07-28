import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  getErrorMessage,
  reportError
} from '@allowance/utilities';
import type { Database } from '@/types/supabase';

export default async function forgotPassword(email: string) {
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