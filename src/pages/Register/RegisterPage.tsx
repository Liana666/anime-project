import { Link } from "react-router-dom";
import gif from '../../img/oni.gif';
import Register from '../../components/auth/Register';

const RegisterPage = () => {
    return (
        <>
            <img
                className="videoImg"
                src={gif}
                alt=""
            />

            <div className="videoContainer">
                <div className="videoWrapper">
                    <div className="videoLogo">
                        AniPlay
                    </div>

                    <Register />

                    <p className="linkRegister">
                        Already have an account? <Link to="/">Sign in</Link>
                    </p>
                </div>
            </div>



        </>

    )
}

export default RegisterPage;