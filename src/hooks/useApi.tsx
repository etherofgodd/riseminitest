import {ApiResponse} from "apisauce";
import {useCallback, useState} from "react";

//typed this response according to the errors gotten from the api
export type AppPromise<T, U> = Promise<ApiResponse<T, { message: string, data: U }>>;


// used my own hook to resolve responses and log requests from a central source so that i can keep api codes organised as the can get messy as the code grows
export function useApi<T, U, param extends any[]>(
    apiFunction: (...args: param) => AppPromise<T, U>,
    notifyOnError: boolean = false
) {
    const [data, setData] = useState<T | undefined>();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [_error, setError] = useState(false);


    const request = useCallback(
        async (...args: param) => {
            console.log("Making the request to the server with args => ", ...args);
            setLoading(true);
            setData(undefined);

            let error = true;

            try {
                const response = await apiFunction(...args);
                if (response.ok) {
                    setData(response.data);
                    error = false
                } else {
                    error = true
                    setErrorMessage(response.data?.message || "Oops! Something happened!")
                }
                setError(error);
                return {response, error};
            } catch (error) {
                console.log("Caught an exception => {}", error);
                return Promise.reject(error);
            } finally {
                setLoading(false);
            }
        },
        [apiFunction]
    );

    return {
        data,
        loading,
        request,
        errorMessage,
        error: _error,
    };
}
