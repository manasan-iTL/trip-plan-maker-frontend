import React, { useState } from "react"
import { useSearchSpotContext } from "../../hooks/context/searchSpotContext"
import SearchList from "../presantation/searchList/template/SearchListTemplate"
import { ApiError, ErrorResponse, Extrack, RouteSpot, Spot, v2PlanDetailResponse, v2RoutesReq, ValidationError } from "../types/v2Types" 
import { postFetcher } from "../../hooks/fetcher"
import { BASE_URL, convertJapaneseToType, PlaceType } from "../../data/constant"
import { useV2PlanContext } from "../../hooks/context/v2PlanContext"
import { useNavigate } from "react-router-dom"
import axios, { AxiosError } from "axios"



const SearchSpotContainer = () => {

    const [selectPlan, setSelectPlan] = useState<string>("");
    const { setDispatchV2Plan } = useV2PlanContext()

    const { state } = useSearchSpotContext();
    const newCombineSpots = state.combineSpots.concat()
    const [validationError, setValidationError] = useState<ValidationError | null>(null)
    const [apiError, setApiError] = useState<ApiError | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const navigate = useNavigate()

    console.log("フロント側で保持しているSpotオブジェクト")
    console.dir(state);

    // TODO: 各スポットを1件だけ抽出する処理を実装する
    const extrackList: Extrack[] = newCombineSpots.map(spots => {
        const eatingSpots = spots.places.filter(spot => spot.types.includes(PlaceType.eating))
        const hotelSpots = spots.places.filter(spot => spot.types.includes(PlaceType.hotel))
        const recommendSpots = spots.places.filter(spot => {
            const splitTheme = spots.theme.split('/')[0];
            return spot.types.includes(convertJapaneseToType(splitTheme))
        })

        return {
            theme: spots.theme,
            eatingSpot: eatingSpots[0],
            hotelSpot: hotelSpots[hotelSpots.length - 1],
            recommendSpot: recommendSpots[0]
        }
    })

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSelectPlan(e.target.value)
    }

    async function createPlan() {

        setIsLoading(true)
        const [selectedPlan] = state.combineSpots.filter(plan => plan.theme === selectPlan)

        if (!selectedPlan || !('places' in selectedPlan)) {
            console.error('テーマを選択してください！')
            setIsLoading(false)
            setValidationError({
                type: 'NOT_FOUND_THEME',
                message: 'テーマを1つだけ選択してください！'
            })
        }

        const spots = selectedPlan.places

        const destination: Spot = spots.filter(spot => spot.types.includes(PlaceType.hotel))[0];

        const wayPoints: Spot[] = spots.filter(spot => spot.place_id !== destination.place_id)

        const reqBody: v2RoutesReq = {
            originSpot: state.origin,
            waypoints: wayPoints,
            destinationSpot: destination,
            activeTimes: state.activeTimes,
            date: state.date,
            theme: selectedPlan.theme
        }

        console.log(reqBody)

        try {
            const response = await postFetcher<v2RoutesReq, v2PlanDetailResponse>(BASE_URL + "/api/v2/spots/routes", reqBody)
            console.log("Plan情報の表示")
            console.log(response)

            setDispatchV2Plan(response.data)

            setIsLoading(false)
            navigate("../plan", { state: response.data })
        } catch (error) {
            console.log(error)
            setIsLoading(false)

            if (axios.isAxiosError(error)) {
                const apiError = error as AxiosError<ErrorResponse>

                if (axios.isAxiosError(error) && error.response) {
                    if (error.response.status === 403) {
                      setIsLoading(false)
                      navigate('./errors')
                    }
                  }
        
                if (apiError.response && apiError.response.data) {
                  setApiError({
                    type: 'NOT_FOUND_PLAN',
                    message: apiError.response.data.message
                  })
        
                  return false;
                }
              }

            setApiError({
                type: 'NOT_FOUND_PLAN',
                message: 'プランが生成できませんでした。条件を変えてお試しください。'
            })
        }
    }

    const closeApiErrorDialog = () => {
        setApiError(null)
    }

    return (
        <SearchList 
            searchSpots={state}
            extrackList={extrackList}
            selectedValue={selectPlan}
            onChange={handleInputChange}
            onSubmit={createPlan}
            isApiError={apiError}
            isLoading={isLoading}
            closeErrorDialog={closeApiErrorDialog}
            validationError={validationError}
        />
    )
}

export default SearchSpotContainer