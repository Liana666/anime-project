import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


import { Preloader } from "../components/Preloader/Preloader";
import { getAuth } from "firebase/auth";

export const ProtectedRoute = ({ children }: any) => {
  const auth = getAuth();
  console.log(auth)
  // const [isAuth, setIsAuth] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     console.log(userAuth)
  //     setIsAuth(!!userAuth);
  //     setIsLoaded(true);
  //   });
  // }, [auth]);

  return (
    <>
      {auth.currentUser ? children : <Navigate to="/login" />}
      {/* {isLoaded ? !isAuth ? <Navigate to="/login" /> : children : <Preloader />} */}
    </>
  );
};
