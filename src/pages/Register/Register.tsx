import './Register.css';
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <iframe
                className="videoImg"
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/JNwSklmhiRg?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3&playlist=JNwSklmhiRg&fs=0&modestbranding=1&showinfo=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>


            <div className="videoContainer">
                <div className="videoWrapper">
                    <div className="videoLogo">
                        AniPlay
                    </div>

                    <div className="loginBtn">
                        Login
                    </div>
                    <div className="loginBtn">
                        Exit
                    </div>


                    <p className="linkRegister">
                        Already have an account? <Link to="/">Sign in</Link>
                    </p>
                </div>
            </div>



        </>

    )
}

export default Register;