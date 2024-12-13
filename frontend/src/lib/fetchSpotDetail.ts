import { PlaceDetailResponse } from "../components/types/v2Types";
import { BASE_URL } from "../data/constant";
import { fetcher } from "../hooks/fetcher";

export async function fetchSpotDetail(placeId: string): Promise<PlaceDetailResponse | undefined> {
    const URL = `${BASE_URL}/api/v2/spots/detail/${placeId}`

    try {
        const result = await fetcher<PlaceDetailResponse>(URL);
        return result
    } catch (error) {
        console.log(error)
        return undefined
    }
}