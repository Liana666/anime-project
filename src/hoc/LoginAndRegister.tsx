import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";
import { FormContainer } from "../components/auth/Form/FormContainer";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/userSlice";

export const LoginAndRegister = ({ firebaseFunction }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    console.log(auth);

    firebaseFunction(auth, email, password)
      .then(({ user }: any) => {
        dispatch(
          login({
            email: user.email,
          })
        );
        navigate("/");
      })
      .catch((error: any) => {
        alert("Error: " + error.message);
      });
  };

  return <FormContainer btnValue="Login" handleSubmit={handleLogin} />;
};
