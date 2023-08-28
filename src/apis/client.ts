import {create} from "apisauce";
import {getValidToken} from "@/utils/storage";

const apiClient = create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
});


apiClient.addAsyncRequestTransform(async (request) => {
    console.log("client.ts", request.url);

    const isOpenRoute =
        request.url?.endsWith("token") || request.url?.endsWith("register");
    if (isOpenRoute) {
        return;
    }
    const token = await getValidToken();
    if (!token) return;

    if (request.headers) {
        request.headers["authorization"] = `Bearer ${token}`;
    }
});


export default apiClient
