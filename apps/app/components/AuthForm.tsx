'use client'

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Database } from '@/types/supabase';

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  return (
    <>
      <Auth
        supabaseClient={supabase}
        view="sign_in"
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        showLinks={false}
        providers={[]}
        redirectTo={process.env.NEXT_PUBLIC_APP_URL + "/api/auth/callback"}
      />
      <Auth
        supabaseClient={supabase}
        view="sign_up"
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        showLinks={false}
        providers={[]}
        redirectTo={process.env.NEXT_PUBLIC_APP_URL + "/api/auth/callback"}
      />
      <Auth
        supabaseClient={supabase}
        view="magic_link"
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        showLinks={false}
        providers={[]}
        redirectTo={process.env.NEXT_PUBLIC_APP_URL + "/api/auth/callback"}
      />
      <Auth
        supabaseClient={supabase}
        view="forgotten_password"
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        showLinks={false}
        providers={[]}
        redirectTo={process.env.NEXT_PUBLIC_APP_URL + "/api/auth/callback"}
      />
    </>
  )
};