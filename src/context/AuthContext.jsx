import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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
    return signInWithPopup(auth, googleProvider);
  };

  const registerUserWithEmailAndPass = async (email, pass, name, photo) => {
    return createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("Congarts! Your Account Registered");
          })
          .catch((error) => {
            toast.warn("Error occured");
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(error);
      });
  };

  const loginWithEmailAndPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const sendPassResetMail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    signOut(auth);
  };
  const authInfo = {
    auth,
    user,
    loginWithGoogle,
    registerUserWithEmailAndPass,
    loginWithEmailAndPass,
    updateUserProfile,
    sendPassResetMail,
    logOut,
  };
  return (
    <MainAuthContext.Provider value={authInfo}>
      {children}
    </MainAuthContext.Provider>
  );
}

export default AuthContext;
