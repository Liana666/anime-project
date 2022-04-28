import { MiddlewareAPI, Dispatch } from "redux";
import { createBrowserHistory } from "history";
// import { syncHistory, routeReducer } from 'react-router-redux';


export const redirectMiddleWare =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
    const email = action.payload?.email;
    const history = createBrowserHistory();
    console.log(history.location);
    console.log(action.type);
    console.log(action.payload?.email);
    if (action.type === "user/addFavoriteAnime" && !action.payload.email) {
      history.push("/login");
    } else {
      return next(action);
    }
  };
