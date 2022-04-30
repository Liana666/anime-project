import { MiddlewareAPI, Dispatch } from "redux";
import { auth } from "../../components/firebase/firebase";

export const customMiddleWare = (store:MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  const user = auth.currentUser;

  if(!user && action.type === "user/addHistory") {
    return;
  }

    return next(action);
  }