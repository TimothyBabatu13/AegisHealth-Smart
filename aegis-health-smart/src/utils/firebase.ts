import { app, db } from "@/config/firebaseConfig";
import { userDetailsType } from "@/types/types";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User, onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

interface CreateNewAccountType {
  data: User|any,
  code: number,
  isDoctor?: boolean
}

type ValidateAuthType = {
  isActive: boolean,
  uid: string | null,
  user?: User
}

export const CreateNewAccount = async (data : userDetailsType) : Promise<CreateNewAccountType> =>{
    const auth = getAuth(app);
    const { email, password,isDoctor } = data;
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      addDoc(collection(db, "users"), {
        email,
        isDoctor,
      });
      isDoctor ? (
        addDoc(collection(db, "specialist"), {
          email,
          name: '',
          profileURL: ''
        })
      ) : (
        addDoc(collection(db, "patient"), {
          email,
          name: '',
          profileURL: ''
        })
      )
      
      return {data: 'Your account has been created', code: 201};
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {data:errorMessage, code: 500}
    });
}

export const LoginToExistingAccount = async (
  data: userDetailsType
): Promise<CreateNewAccountType> => {
  const auth = getAuth(app);
  const { email, password } = data;

  try {
    await setPersistence(auth, browserLocalPersistence);

    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user;

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();
    
    return {data: user, code: 201, isDoctor: userData.isDoctor ? userData.isDoctor as boolean : false};
  } catch (err: any) {
    console.error("Login error:", err.message);
    return { data: err.message, code: 500 };
  }
};


export const ValidateAuth =  async ()   => {
  const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
      if (user) {
      
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