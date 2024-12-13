import PlanTemplate from "../presantation/plan/Template/PlanTemplate"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { fetcher, postFetcher } from "../../hooks/fetcher"
import { BASE_URL } from "../../data/constant"
import { useV2PlanContext } from "../../hooks/context/v2PlanContext"
import { PlacePhotoUriResponse, Spot, v2GPhoto, v2PlanDetailResponse, v2SpotCard } from "../types/v2Types"

interface MatchPhoto {
    photo: v2GPhoto,
    place_id: string
}

const PlanContainer = () => {
    const { state, setDispatchV2Plan } = useV2PlanContext()

    const location = useLocation()
    const data = location.state as v2PlanDetailResponse

    const [activeIndex, setActiveIndex] = useState<number>(0)
    const navigate = useNavigate()

    const handleTabActive = (index: number) => {
        setActiveIndex(index)
    }

    useEffect(() => {
        const v2Places: v2SpotCard[] = data.plan[activeIndex].Routes.filter(place => place.category === "SPOT");
        const excluded: v2SpotCard[] = v2Places.filter(place => place.type !== "DEPARTURE");
        const photos: MatchPhoto[] = excluded.map(place => { 
            return {
                place_id: place.spot.place_id,
                photo: place.spot.photoReference
            }
        });

        const fetchPhotoData = async () => {
            try {
                photos.forEach(async (photo) => {
                    const extrackPhotoId = photo.photo.name.split("/").pop();

                    if (!extrackPhotoId) {
                        console.warn("文字を抽出できませんでした")
                        return
                    }

                    const queryParams = new URLSearchParams({
                        heightPx: String(photo.photo.heightPx) ?? "100",
                        widthPx: String(photo.photo.widthPx) ?? "200"
                    })

                    const URL = `${BASE_URL}/api/v2/spots/places/${photo.place_id}/photo/${extrackPhotoId}?${queryParams.toString()}`

                    const photoUriObj = await fetcher<PlacePhotoUriResponse>(URL)
                    console.log("写真データ")
                    console.log(photoUriObj)

                    setDispatchV2Plan(prev => {
                        const newPlan = { ...prev };
                        newPlan.plan = [...prev.plan]; 

                        newPlan.plan[activeIndex] = {
                            ...prev.plan[activeIndex],
                            Routes: prev.plan[activeIndex].Routes.map(place => {
                                if (place.category === "TRAFFIC") return place; // TRAFFIC カテゴリの場合はそのまま返す
                    
                                if (place.spot.place_id === photo.place_id) {
                                    const spot: Spot = {
                                        ...place.spot,
                                        spotImgSrc: photoUriObj.photoUri // 画像のURLを更新
                                    };
                    
                                    return { ...place, spot }; // 新しいオブジェクトを返す
                                }
                    
                                return place; // それ以外の場合はそのまま返す
                            })
                        };

                        return newPlan
                    })
                });
            } catch (error) {
                console.log(error)
            }
        }

        fetchPhotoData()
    }, [activeIndex])

    return (
        <PlanTemplate
            basicInfo={state?.basicInfo} 
            plan={state?.plan}
            navigate={navigate}
            activeIndex={activeIndex}
            handleTabActive={handleTabActive}
        />
    )
}

export default PlanContainer