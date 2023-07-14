import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

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

export async function updatePassword(password: string) {
  const supabase = createClientComponentClient<Database>();

  try {
    return await supabase.auth.updateUser({
      password
    });  
  } catch (error) {
    return error;
  } finally {
    // Log password update
    // Send an email to let them know the password was updated (or attempted)
  }
};

type UpdatePasswordResponse = Awaited<ReturnType<typeof updatePassword>>
export type UpdatePasswordResponseSuccess = UpdatePasswordResponse['data']
export type UpdatePasswordResponseError = UpdatePasswordResponse['error']