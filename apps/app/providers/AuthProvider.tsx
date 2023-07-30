'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo
} from 'react';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ session, children }) {
  const [user, setUser] = useState(null);

  const memoUser = useMemo(() => ({
    user
  }), [user]);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    } else {
      setUser(null);
    }
  }, [session]);

  return (
    <AuthContext.Provider value={memoUser}>
      {children}
    </AuthContext.Provider>
  )
};