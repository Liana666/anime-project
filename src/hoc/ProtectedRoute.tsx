import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { auth } from "../firebase";
import { Preloader } from "../components/Preloader/Preloader";

export const ProtectedRoute = ({ children }: any) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setIsAuth(!!userAuth);
      setIsLoaded(true);
    });
  }, [isLoaded]);

  return (
    <>
      {isLoaded ? !isAuth ? <Navigate to="/login" /> : children : <Preloader />}
    </>
  );
};
