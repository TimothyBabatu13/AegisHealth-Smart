import { app } from "@/config/firebaseConfig";
import { ValidateAuth } from "@/utils/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const GET = () => {
    const auth = getAuth(app);
    let value;
    onAuthStateChanged(auth, (user) => {
        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        value = true
        // return new Response(JSON.stringify('true'))
        // ...
    } else {
        // User is signed out
        // ...
        // console.log('user is signed out')
        value= false
        // return new Response(JSON.stringify('false'))
    }
    });
    return new Response(JSON.stringify(value), {
        headers: {
            "Content-Type" : "application/json",
        }
    })
}