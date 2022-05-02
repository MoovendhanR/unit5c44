import {isAuth} from "./actions";
import {client} from "./actions";

const init = {};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
      case isAuth:
          return{...store,isLoggedIn:payload}
          case client:
              return{...store,currentUser:payload}
    default:
      return store;
  }
};