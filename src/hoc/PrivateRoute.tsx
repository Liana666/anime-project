import { Navigate } from "react-router-dom";

import { getAuth } from "firebase/auth";

type Props = {
  children: JSX.Element;
};

export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const auth = getAuth();

  return <>{auth.currentUser ? children : <Navigate to="/login" />}</>;
};
