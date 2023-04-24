import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface AuthContextProps {
  loading: boolean;
  user: any;
  setUser: (user: any) => void;
  signIn: (phoneNumber: string) => Promise<void>;
  confirm: FirebaseAuthTypes.ConfirmationResult | null;
  confirmCode: (code: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>(null);

export const useUserData = (): AuthContextProps => {
  const userData = useContext(AuthContext);
  return { ...userData };
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult>(null);

  const signIn = async (phoneNumber: string) => {
    try {
      setLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (e) {
      setLoading(false);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await auth().signOut();
    } catch (e) {
      setLoading(false);
      setUser(null);
      console.error(e);
    } finally {
      setUser(null);
      setLoading(false);
    }
  };

  const confirmCode = async (code: string) => {
    try {
      setLoading(true);
      await confirm.confirm(code);
    } catch (error) {
      setLoading(false);
      console.log('Invalid code.');
    } finally {
      setLoading(false);
    }
  };

  const onAuthStateChanged = (user: any) => {
    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, setUser, signIn, confirm, confirmCode, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
