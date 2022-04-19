import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FormContainer } from "./Form/FormContainer";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slices/userSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    console.log(auth);

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          login({
            email: user.email,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  return <FormContainer btnValue="Login" handleSubmit={handleLogin} />;
};
