import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';

export default async function updatePassword(password: string) {
  const supabase = createClientComponentClient<Database>();

  try {
    const result = await supabase.auth.updateUser({
      password
    });

    return {
      status: 'OK',
      data: result
    }
  } catch (error) {
    return {
      status: 'Error',
      message: error.message
    }
  } finally {
    // Log password update
    // Send an email to let them know the password was updated (or attempted)
  }
};