import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { auth } from "../../firebase";

export const MainPage = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <>
      <h1>AniList</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
};
