import { useLoaderData } from "react-router-dom"
import SpotDetailTemplate from "../presantation/detail/Template/SpotDetailTemplate"
import { useSearchSpotContext } from "../../hooks/context/searchSpotContext";
import { DetailTemplateProps, PlaceDetailResponse, Spot } from "../types/v2Types";
import { useV2PlanContext } from "../../hooks/context/v2PlanContext";


const SpotDetailContainer = () => {

    const data = useLoaderData() as PlaceDetailResponse;
    const { state: plan } = useV2PlanContext()
    const spots = plan.plan.map(day => day.Routes).flat().filter(route => route.category === "SPOT").map(spotCard => spotCard.spot)

    const targetSpot = spots.find(spot => spot.place_id === data.place_id)
    const mergedSpot: DetailTemplateProps = targetSpot ? 
    {
        spot: {
            ...data,
            ...targetSpot
        }
    }:
    {
        spot: null
    }

    return (
        <SpotDetailTemplate 
            spot={mergedSpot.spot}
        />
    )
}

export default SpotDetailContainer