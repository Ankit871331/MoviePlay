import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, provider, signInWithPopup, signOut,  } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./MenuTwo.css";
const MenuTwo = () => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
    });
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  };

  const logout = () => {
    signOut(auth).then(() => setUser(null));
  };

  return (
    <div className="menuTwo" id="home">
      <div className="logo_reg_logo_main">
      <div className="reg_log">
        {user ? (
          <div className="flex gap-[10rem]">

            <div className="login_btn_name">
          
           <div className="flex gap-[0.8rem] justify-center items-center"> <img src={user.photoURL} alt="profile" width={40} className="rounded-[20px] shadow-2xl"/>
           <span>{user.displayName}</span>
            </div>
            <div className="register_btn register">
            <button className=" " onClick={logout}>
              Logout
            </button>
            </div>

            </div>
          </div>
        ) : (
          <button className="register" onClick={loginWithGoogle}>
            Register
          </button>
        )}
      </div>

      <div className="logoName">
        <h2 className="text-red">Movie</h2>
        <img src="./icon.png" alt="" />
      </div>
      </div>

      <div className="menu_contents">
        
          <a className="a_border" href="https://portfolio-ankit-orig.netlify.app/"> About Us </a>
          
        <button className="border">Articles</button>
        <button className="border" ><a href="#moviecard"> Series </a> </button>
        <button className="border">Music</button>
        <Link to="/">
          <button className="border home">Home</button>
        </Link>
        <p className="text-[40px]" id="line"> |</p>
      </div>
    </div>
  );
};

export default MenuTwo;
