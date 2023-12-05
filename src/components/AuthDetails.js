import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import Showprofile from "./Showprofile";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  // useEffect(() => {
  //   const listen = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setAuthUser(user);
  //     } else {
  //       setAuthUser(null);
  //     }
  //   });

  //   return () => {
  //     listen();
  //   };
  // }, []);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User signed in:", user);
        setAuthUser(user);
      } else {
        console.log("User signed out");
        setAuthUser(null);
      }
    });
  
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      { authUser ? (
        <>
          {/* <p className="authsign" >{`Signed In as ${authUser.email}`}</p> */}
          <Showprofile />
          <button onClick={userSignOut} class="btn btn-secondary">Sign Out</button>
          
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
