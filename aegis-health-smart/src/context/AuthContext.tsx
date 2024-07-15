// import { useContextHook } from '@/utils/useContext';
import { app } from '@/config/firebaseConfig';
import { AuthContextType } from '@/types/types';
import { useContextHook } from '@/utils/useContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react'


const Context = createContext<AuthContextType | null>(null)

const AuthContext = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const [id, setId] = useState<string|null>('');

    useEffect(()=> {
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user) => {
          if (user) {
          const uid = user.uid;
          console.log(uid);
          setId(uid);
      } else {
          setId(null)
          // console.log('...not login')
      }
      });
    }, [])

    if(id === '') return <h1 className='h-[100vh] w-[100vw] flex justify-center items-center bg-black text-white'>Loading...</h1>
  return (
    <Context.Provider value={{id, setId }}>
        {children}
    </Context.Provider>
  )
}

export default AuthContext;


export const useAuthContextProvider : ()=>AuthContextType  = () => useContextHook(Context)