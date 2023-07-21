import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';
import type { AccountMetadata } from '@/types';

export default async function updateUserMetadata(metadata: AccountMetadata) {
  const supabase = createClientComponentClient<Database>();

  try {
    const result = await supabase.auth.updateUser({
      data: metadata
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
  }
};