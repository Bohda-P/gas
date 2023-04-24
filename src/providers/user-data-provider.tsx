import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

interface UserContextProps {
  phone: string;
  firstName: string;
  secondName: string;
  dateOfBirth: Date;
  setPhone: (phone: string) => void;
  setFirstName: (firstName: string) => void;
  setSecondName: (secondName: string) => void;
  setDateOfBirth: (dateOfBirth: Date) => void;
}

export const UserContext = createContext<UserContextProps>(null);

export const useUserRegisterData = (): UserContextProps => {
  const userData = useContext(UserContext);
  return { ...userData };
};

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  return (
    <UserContext.Provider
      value={{
        phone,
        setPhone,
        firstName,
        setDateOfBirth,
        secondName,
        setFirstName,
        setSecondName,
        dateOfBirth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
