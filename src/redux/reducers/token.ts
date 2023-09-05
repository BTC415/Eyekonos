import { Action } from "redux";
import { IToken, CHANGE_TOKEN } from "../constants/token";

const INITIAL: IToken = {
  token: "",
  user_name: "",
};

export const TokenReducer = (state = INITIAL, action: any): IToken => {
  switch (action.type) {
    case CHANGE_TOKEN:
      return {
        token: action.token,
        user_name: action.user_name,
      };

    default:
      return state;
  }
};
