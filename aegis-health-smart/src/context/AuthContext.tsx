// import { useContextHook } from '@/utils/useContext';
import { app } from '@/config/firebaseConfig';
import { useContextHook } from '@/utils/useContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react'


interface AuthContextType {
    id : string
}

const Context = createContext<AuthContextType | null>(null)

const AuthContext = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const [id, setId] = useState<string>('');
    useEffect(()=> {
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user) => {
          if (user) {
          const uid = user.uid;
          console.log(uid)
          setId(uid)
      } else {
          setId('')
          console.log('...not login')
      }
      });
    }, [])
  return (
    <Context.Provider value={{id}}>
        {children}
    </Context.Provider>
  )
}

export default AuthContext;

// export const useContextHook = (Context: any) => {
//   const context = useContext(Context);
//   if(context === null ) {
//       throw new Error('using context hook outside it container');
//   };
  
//   return context;
// // }
// export const useAuthContextProvider = () => {
//   const context = useContext(Context);
//   if(context === null ) {
//       throw new Error('using context hook outside it container');
//   };
//   return context
// };
export const useAuthContextProvider : any = () => useContextHook(Context)