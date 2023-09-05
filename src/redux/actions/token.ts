import { IToken, CHANGE_TOKEN } from "../constants/token";

export const changeToken = (token: IToken) => {
    console.log(token)
    return {
        type: CHANGE_TOKEN,
        data: token
    };
};