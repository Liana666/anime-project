import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../store/slices/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(addUser({
                    email: user.email,
                    id: user.uid
                }));
                navigate('/')
            })
            .catch((error) => {
                console.log('Error: ' + error.message);
                console.log(error.response);
            });
    }

    return (
        <Form
            btnValue="Login"
            handleSubmit={handleLogin}
        />
    )

}

export default Login;