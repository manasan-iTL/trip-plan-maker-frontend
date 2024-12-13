import axios, { AxiosResponse } from "axios"

export const fetcher = async<T>(path: string): Promise<T> => {
    return axios.get(path, {withCredentials: true}).then((res: AxiosResponse<T>) => res.data)
}

export const postFetcher = async<TRequest, TResponse>(path: string, args: TRequest): Promise<AxiosResponse<TResponse>> => {
    return axios.post(path, args, {withCredentials: true})
}