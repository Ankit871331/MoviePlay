import React, { useState, useEffect } from "react";
import { auth, provider, signInWithPopup, signOut } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);

  // ✅ Check user on page reload
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User Data:", result.user);
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    signOut(auth).then(() => setUser(null));
  };

  return (
    <div>
      {user ? (
        <div className="flex text-white">
          <h3>Welcome, {user.displayName}</h3>
          <img
            src={user.photoURL}
            alt={user.displayName || "User"}
            className="w-[40px] rounded-full"
          />
          <button onClick={logout} className="register" >Logout</button>
        </div>
      ) : (
        <button onClick={loginWithGoogle}>Login/SignUp</button>
      )}
    </div>
  );
};

export default Login;
