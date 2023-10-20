import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // Create User With E-mail & Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update user Profile
  const handleUserUpdate = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // Login User With E-mail & Password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

   //   Login User With Google
   const userGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   Login User With Github
  const userGithubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //   Manage User [onAuthStateChanged]
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //   User Log Out Section
  const handleLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log Out Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userInfo = {
    createUser,
    loginUser,
    handleLogOut,
    handleUserUpdate,
    user,
    loading,
    userGoogleLogin,
    userGithubLogin,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
