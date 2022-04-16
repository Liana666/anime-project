import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { addUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user)
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
            btnValue="Register"
            handleSubmit={handleRegister}
        />
    )

}

export default Register;