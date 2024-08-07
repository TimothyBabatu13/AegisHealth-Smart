import { app } from "@/config/firebaseConfig";
import { ValidateAuth } from "@/utils/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export async function GET(): Promise<Response> {
    
    const auth = getAuth(app);
    return new Promise<Response>((resolve) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            resolve(
              new Response(JSON.stringify({ isActive: true, uid, user }), {
                headers: { 'Content-Type': 'application/json' },
              })
            );
          } else {
            resolve(
              new Response(JSON.stringify({ isActive: false, uid: null }), {
                headers: { 'Content-Type': 'application/json' },
              })
            );
          }
        });
      });
  }
  