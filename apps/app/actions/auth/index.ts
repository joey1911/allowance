import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Database } from '@/types/supabase';

export async function loginWithPassword(email: string, password: string) {
  const supabase = createClientComponentClient<Database>();

  try {
    const {
      data,
      error
    } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
  } catch(err) {
    // Log Error
  } finally {
    // Log login attempt
  }
};

export async function signOut() {
  const supabase = createClientComponentClient<Database>();
  
  const { error } = await supabase.auth.signOut();

  if (!error) {
    return true;
  } else {
    return false;
  }
}

export async function updatePassword(password: string) {
  const supabase = createClientComponentClient<Database>();

  try {
    const {
      data,
      error
    } = await supabase.auth.updateUser({
      password: password
    });

    if (data) {
      return true;
    }

    if (error) {
      return false;
    }
  } catch(err) {
    //Log Error
  } finally {
    // Log password reset request
  }
};