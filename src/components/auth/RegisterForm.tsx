import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { login } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "./Form/FormContainer";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          login({
            email: user.email,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        console.log("Error: " + error.message);
        console.log(error.response);
      });
  };

  return <FormContainer btnValue="Register" handleSubmit={handleRegister} />;
};
