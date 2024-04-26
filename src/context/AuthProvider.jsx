import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName });
      toastSuccessNotify("Registered Sucessfully");
      navigate("/login");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };
  const navigate = useNavigate();
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
      toastSuccessNotify("Logged-In Sucessfully");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };
  const logOut = () => {
    signOut(auth).then(() => {
      navigate("/login");
      toastSuccessNotify("Logged out successfully.Hope to see you soon.");
    });
  };
  const userTracker = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        setCurrentUser(false);
        // User is signed out
        // ...
      }
    });
  };
  useEffect(() => {
    // I need to call this method once compenent did mount.
    userTracker();
  }, []);

  // Google Authentication
  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/main");
        toastSuccessNotify("Registered succesfully with Google.");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };
  // Send a password reset email

  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastSuccessNotify("Please check your mail inbox");
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };

  const values = {
    currentUser,
    createUser,
    signIn,
    logOut,
    googleAuth,
    forgotPassword,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
export const useContextAuth = () => {
  return useContext(authContext);
};

export default AuthProvider;
