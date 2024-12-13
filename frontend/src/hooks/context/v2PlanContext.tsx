import React, { useState, createContext, useContext, Dispatch, SetStateAction } from "react"
import { v2PlanDetailResponse } from "../../components/types/v2Types"

type PlanContextItem = {
    state: v2PlanDetailResponse,
    // setPhotoState: (photos: Photo[], activeIndex: number) => void,
    setDispatchV2Plan: Dispatch<SetStateAction<v2PlanDetailResponse>>
}

const V2PlanContext = createContext({} as PlanContextItem)

export const useV2PlanContext = ( ) => {
    return useContext(V2PlanContext)
}

export const V2PlanContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [plan, setPlan] = useState<v2PlanDetailResponse>({} as v2PlanDetailResponse)

    return (
        <V2PlanContext.Provider value={{state: plan, setDispatchV2Plan: setPlan}}>
            {children}
        </V2PlanContext.Provider>
    )
}