import {useContext} from "react";
import jwt_decode from "jwt-decode";
import {useAppDispatch} from "@/hooks/useAppStore";
import AuthContext, {IAuthContext} from "@/store/AuthContext";
import {IUser} from "@/types/IUser";
import {ITokens, removeToken, storeToken} from "@/utils/storage";


const useAuth = () => {
    const {setUser, user} = useContext<IAuthContext>(AuthContext);
    const dispatch = useAppDispatch();

    const logIn = async (
        authToken: ITokens
    ) => {
        await storeToken(authToken);
        const user = jwt_decode<IUser>(authToken.token);
        setUser(user);
    };

    const logOut = async () => {
        await removeToken();
        setUser(null);
    };

    return {user, logIn, logOut};
}
export default useAuth;
