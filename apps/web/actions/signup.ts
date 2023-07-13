import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Database } from '../types/supabase';
//import type { User } from '../types/user';

export default async function signup(
  email: string,
  password: string
) {
  const supabase = createClientComponentClient<Database>();

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_API_URL + '/api/auth/callback'
      }
    });

    if (error) throw error;

    return data;
  } catch (error) {
    alert('Error updating the data!');
  } finally {
    // Log user signup
  }
};