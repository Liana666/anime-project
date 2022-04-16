import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useAuth = () => {
    const { email, id } = useSelector((state: RootState) => state.user);

    return {
        isAuth: !!id,
        email,
        id
    }
}

export default useAuth;