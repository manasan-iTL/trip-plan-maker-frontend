import { useLoaderData } from "react-router-dom"
import SpotDetailTemplate from "../presantation/detail/Template/SpotDetailTemplate"
import { useSearchSpotContext } from "../../hooks/context/searchSpotContext";
import { DetailTemplateProps, PlaceDetailResponse, Spot, v2SpotCard } from "../types/v2Types";
import { useV2PlanContext } from "../../hooks/context/v2PlanContext";


const SpotDetailContainer = () => {

    const data = useLoaderData() as PlaceDetailResponse;
    const { state: plan } = useV2PlanContext()
    const v2SpotCards = plan.plan.map(day => day.Routes).flat().filter(route => route.category === "SPOT") as v2SpotCard[]
    const spots = v2SpotCards.map(spotCard => spotCard.spot);

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