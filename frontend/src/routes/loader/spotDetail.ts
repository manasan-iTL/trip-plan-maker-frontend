import { LoaderFunctionArgs } from "react-router-dom";
import { fetchSpotDetail } from "../../lib/fetchSpotDetail";

export async function getSpotDetail(args: LoaderFunctionArgs) {
    const { spotId } = args.params;

    if (spotId === "CHILL_DEPATURE" || !spotId) {
        return {}
    }

    try {
        const result = await fetchSpotDetail(spotId);

        if (!result) return {}

        return result
    } catch (error) {
        console.log(error)
        return {}
    }
}