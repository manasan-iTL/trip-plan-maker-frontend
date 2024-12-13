import React, { useState, createContext, useContext, Dispatch, SetStateAction } from "react"
import { Photo, PlanDetailsResponse, Spot } from "../../components/types/types"

type PlanContextItem = {
    state: PlanDetailsResponse,
    setPhotoState: (photos: Photo[], activeIndex: number) => void,
    setDispathPhoto: Dispatch<SetStateAction<PlanDetailsResponse>>
}

const PlanContext = createContext({} as PlanContextItem)

export const usePlanContext = ( ) => {
    return useContext(PlanContext)
}

export const PlanContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [plan, setPlan] = useState<PlanDetailsResponse>({} as PlanDetailsResponse)

    const setPhotoState = (photos: Photo[], activeIndex: number) => {

        setPlan((prevState) => {
            const plans = prevState.plan.map((plan, index) => {
                if (index === activeIndex) {
                    const newRoutes = plan.Routes.map(card => {
                        if (card.category === "SPOT") {
                            const photo = photos.filter(photo => photo.id === card.spot.id)
                            
                            if (photo.length > 0) {
                                const newSpot: Spot = {...card.spot, spotImgSrc: photo[0].spotImgSrc}
                                const spotCard = {...card, spot: newSpot}
                                return spotCard
                            }

                            return card
                        }
                        return card
                    })

                    return { Routes: newRoutes }
                }
                return plan
            })

            return { basicInfo: prevState.basicInfo, plan: plans }
        })
    }

    return (
        <PlanContext.Provider value={{state: plan, setPhotoState: setPhotoState, setDispathPhoto: setPlan}}>
            {children}
        </PlanContext.Provider>
    )
}