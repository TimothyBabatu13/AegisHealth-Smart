import { app } from "@/config/firebaseConfig";
import { userDetailsType } from "@/types/types";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from "firebase/auth";

interface CreateNewAccountType {
  data: User|any,
  code: number
}

export const CreateNewAccount = async (data : userDetailsType) : Promise<CreateNewAccountType> =>{
    const auth = getAuth(app);
    const { email, password } = data;
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return {data: user, code: 201};
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {data:errorMessage, code: 500}
    });
}

export const LoginToExistingAccount = async ( data: userDetailsType ) : Promise<CreateNewAccountType> => {
  const auth = getAuth(app);
  const { email, password } = data;
  return signInWithEmailAndPassword(auth, email, password)
  .then((usercredentials) => {
    const user = usercredentials.user;
    return {data: user, code: 201};
  })
  .catch((err) => {
    const errorMessage = err.message;
    const errorCode = err.code;
    return {data:errorMessage, code: 500}
  })
}