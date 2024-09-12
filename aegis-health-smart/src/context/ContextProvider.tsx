<<<<<<< HEAD
'use client';
import AuthContext from "./AuthContext"

const ContextProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <AuthContext>
        {children}
    </AuthContext>
  )
}

=======
'use client';
import AuthContext from "./AuthContext"

const ContextProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <AuthContext>
        {children}
    </AuthContext>
  )
}

>>>>>>> master
export default ContextProvider