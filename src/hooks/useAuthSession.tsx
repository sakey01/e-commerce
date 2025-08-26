// src/hooks/useAuthSession.ts
import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export const useAuthSession = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Gets user session
  useEffect(() => {
    const fetchSession = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        setIsSignedIn(!!data.session);
      } catch (e) {
        console.error(e);
        setIsSignedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSession();
  }, []);

  // Sign out function
  const signOut = async () => {
    await supabase.auth.signOut();
    setIsSignedIn(false);
  };

  return { isSignedIn, isLoading, signOut };
};
