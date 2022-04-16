import { Link } from 'react-router-dom';
import gif from '../../img/oni.gif';
import Login from '../../components/auth/Login';

const LoginPage = () => {
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

               <Login />

               <p className="linkRegister">
                  Or <Link to="/register">register</Link>
               </p>
            </div>
         </div>

      </>

   )
}

export default LoginPage;