import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../services/firebase";
import { toast } from "react-toastify";

export const MainAuthContext = createContext();
function AuthContext({ children }) {
  const [user, setuser] = useState();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser({});
      }
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider);
    toast.success("Successfully Logged In");
  };

  const logOut = () => {
    signOut(auth);
  };
  const authInfo = {
    auth,
    user,
    loginWithGoogle,
    logOut,
  };
  return (
    <MainAuthContext.Provider value={authInfo}>
      {children}
    </MainAuthContext.Provider>
  );
}

export default AuthContext;
