import { app } from "@/config/firebaseConfig";
import { userDetailsType } from "@/types/types";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User, onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";

interface CreateNewAccountType {
  data: User|any,
  code: number
}

type ValidateAuthType = {
  isActive: boolean,
  uid: string | null,
  user?: User
}
export const CreateNewAccount = async (data : userDetailsType) : Promise<CreateNewAccountType> =>{
    const auth = getAuth(app);
    const { email, password } = data;
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return {data: 'Your account has been created', code: 201};
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {data:errorMessage, code: 500}
    });
}

export const LoginToExistingAccount = async ( data: userDetailsType ) : Promise<CreateNewAccountType> => {
  const auth = getAuth(app);
  setPersistence(auth, browserLocalPersistence)
  .then(res => {
    return;
  })
  .catch(err => {
    return;
  })
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

export const ValidateAuth =  ()   => {
  const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
      if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid)
      return ({isActive: true, uid, user: user});
      // ...
    } else {
      // User is signed out
      // ...
      console.log('not active')
      return ({isActive: false, uid: null,})
    }
})}