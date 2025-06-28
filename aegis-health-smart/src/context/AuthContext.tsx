'use client';

import { app, db } from '@/config/firebaseConfig';
import { userStore } from '@/stores/userStore';
import { AuthContextType } from '@/types/types';
import { useContextHook } from '@/utils/useContext';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react'


const Context = createContext<AuthContextType | null >(null)

const AuthContext = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const auth = getAuth(app);
    const [id, setId] = useState<string|null>('');
    const [user, setUser] = useState<User | null>(null);
    const { setIsLoading, setIsDoctor, setUser: setStoreUser, setOnBoarded } = userStore();

    useEffect(()=> {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user)
            const uid = user.uid;
            setId(uid);
            setStoreUser(user);
            //comment these out
            // setIsDoctor(false)
            // setIsLoading(false);

            //
            const fetchUserDetails = async() => {
              const usersRef = collection(db, "users");
              const q = query(usersRef, where("email", "==", user.email));
              const querySnapshot = await getDocs(q);
              
              const userDoc = querySnapshot.docs[0];
              const userData = userDoc.data();
              setIsLoading(false);
              let isDoctor: boolean;
              userData.isDoctor ? isDoctor = userData.isDoctor : isDoctor =false
              setOnBoarded(userData.onboarded as boolean)
              setIsDoctor(isDoctor)
            }
            fetchUserDetails();
          } else {
            setIsLoading(false);
            setId(null)
          }
        });
      return ()=> unsubscribe();
    }, [auth])

    // if(id === '') return <Loader />
  return (
    <Context.Provider value={{id, setId, user}}>
        {children}
    </Context.Provider>
  )
}

export default AuthContext;


export const useAuthContextProvider : ()=>AuthContextType  = () => useContextHook(Context)