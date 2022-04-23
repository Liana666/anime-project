import { MiddlewareAPI, Dispatch } from "redux";

export const customMiddleWare = (store:MiddlewareAPI) => (next: Dispatch) => (action: any) => {
    typeof action == "function" ?
    action(store.dispatch, store.getState) :
    next(action)
  }