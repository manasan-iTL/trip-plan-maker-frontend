import useSWR from "swr"
import useSWRMutation from 'swr/mutation'
import { fetcher } from "./fetcher"
import { Spot } from "../components/types/v2Types"
import { BASE_URL } from "../data/constant"
import React, { useState } from "react"
import { AxiosError } from "axios"

export function useFetchSpots() {

    const [inputSpotValue, setInputSpotValue] = useState<string>("")
    const [ queryKey, setQueryKey ] = useState<string>("")

    // const url: string | null = !queryKey? null : BASE_URL + queryKey

    const { data, error, trigger } = useSWRMutation<Spot[], AxiosError>('/api/spots/', fetcher)


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputSpotValue(e.target.value)
    }

    const handleSubmit = (spotValue: string) => {
        if (spotValue) {
            console.log(spotValue)
            setQueryKey(`/api/spots/?keyword=${spotValue}`)
            setInputSpotValue("")
        } 
    }

    return {
        data,
        isError: error,
        handleInputChange,
        handleSubmit,
        inputSpotValue,
        trigger
    }
}