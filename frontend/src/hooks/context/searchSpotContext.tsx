import React, { useState, createContext, useContext, Dispatch, SetStateAction } from "react"
import { SearchSpotsResponseBody } from "../../components/types/v2Types"

type SearchSpotContext = {
    state: SearchSpotsResponseBody,
    setSearchSpots: Dispatch<SetStateAction<SearchSpotsResponseBody>>
}

const SearchSpotContext = createContext({} as SearchSpotContext)

export const useSearchSpotContext = ( ) => {
    return useContext(SearchSpotContext)
}

export const SearchSpotContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [candidateSpots, setCandidateSpots] = useState<SearchSpotsResponseBody>({} as SearchSpotsResponseBody)

    return (
        <SearchSpotContext.Provider value={{state: candidateSpots, setSearchSpots: setCandidateSpots}}>
            {children}
        </SearchSpotContext.Provider>
    )
}