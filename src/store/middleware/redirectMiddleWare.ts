import { MiddlewareAPI, Dispatch } from "redux";
import { createBrowserHistory } from "history";


export const redirectMiddleWare =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
    const history = createBrowserHistory();

    if (action.type === "user/addFavoriteAnime" && !action.payload.email) {
      history.push("/login");
    } else {
      return next(action);
    }
  };
