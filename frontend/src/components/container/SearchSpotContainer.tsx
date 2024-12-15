import React, { useState } from "react"
import { useSearchSpotContext } from "../../hooks/context/searchSpotContext"
import SearchList from "../presantation/searchList/template/SearchListTemplate"
import { Extrack, RouteSpot, Spot, v2PlanDetailResponse, v2RoutesReq } from "../types/v2Types" 
import { postFetcher } from "../../hooks/fetcher"
import { BASE_URL, convertJapaneseToType, PlaceType } from "../../data/constant"
import { useV2PlanContext } from "../../hooks/context/v2PlanContext"
import { useNavigate } from "react-router-dom"



const SearchSpotContainer = () => {

    const [selectPlan, setSelectPlan] = useState<string>("");
    const { setDispatchV2Plan } = useV2PlanContext()

    const { state } = useSearchSpotContext();
    const newCombineSpots = state.combineSpots.concat()

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

        const [selectedPlan] = state.combineSpots.filter(plan => plan.theme === selectPlan)
        const spots = selectedPlan.places

        // const origin: Spot = {
        //     place_id: "CHILL_DEPATURE",
        //     spotName: "出発地",
        //     spotImgSrc: "",
        //     spotImgAlt: "",
        //     types: ["DEPATURE"],
        //     location:{"latitude":35.6912212009455,"longitude":139.73552448046175},
        //     rating: 0,
        //     userRatingCount: 0,
        //     formattedAddress: "出発地",
        //     photoReference: {
        //         name: "",
        //         heightPx: 0,
        //         widthPx: 0
        //     }
        // }

        const destination: Spot = spots.filter(spot => spot.types.includes("HOTEL"))[0];

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

            navigate("../plan", { state: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SearchList 
            searchSpots={state}
            extrackList={extrackList}
            selectedValue={selectPlan}
            onChange={handleInputChange}
            onSubmit={createPlan}
        />
    )
}

export default SearchSpotContainer