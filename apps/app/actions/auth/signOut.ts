import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  getErrorMessage,
  reportError
} from '@allowance/utilities';
import type { Database } from '@/types/supabase';

export default async function signOut() {
  const supabase = createClientComponentClient<Database>();
  
  const { error } = await supabase.auth.signOut();

  if (!error) {
    return true;
  }

  return false;
};