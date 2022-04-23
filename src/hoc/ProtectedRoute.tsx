import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { getAuth } from "firebase/auth";
import { Preloader } from "../components/Preloader/Preloader";

export const ProtectedRoute = ({ children }: any) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setIsAuth(!!userAuth);
      setIsLoaded(true);
    });
  }, [isLoaded, auth]);

  return (
    <>
      {isLoaded ? !isAuth ? <Navigate to="/login" /> : children : <Preloader />}
    </>
  );
};
