import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  getErrorMessage,
  reportError
} from '@allowance/utilities';
import type { Database } from '@/types/supabase';

export default async function sendPasswordResetLink(email: string) {
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
  }
}