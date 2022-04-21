import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA7wN6zEWxaqFC6M3rR8llQIesJfUMT_F4",
    authDomain: "auth-app-357c1.firebaseapp.com",
    projectId: "auth-app-357c1",
    storageBucket: "auth-app-357c1.appspot.com",
    messagingSenderId: "438069857699",
    appId: "1:438069857699:web:a77dfe4ab826fd24109e16"
};

const firebaseApp = initializeApp(firebaseConfig);
// export const auth = getAuth(firebaseApp);