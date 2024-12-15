import React, { useEffect, useState } from "react";
import classes from "./WayPointCard.module.css"
import Button from "../Button/Button";
import { PlacePhotoUriResponse, Spot } from "../../types/v2Types";
import LazyImage from "../Images/LazyImage";
import { useV2PlanContext } from "../../../hooks/context/v2PlanContext";
import { BASE_URL } from "../../../data/constant";
import { fetcher } from "../../../hooks/fetcher";

type Props = Spot &
     { 
        buttonStyles?: React.CSSProperties
        text: string
        imgSize: React.CSSProperties; 
        onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
        activeIndex: number,
    }

const WayPointCard = (props: Props) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { state, setDispatchV2Plan } = useV2PlanContext()

    useEffect(() => {
        setIsLoading(true)

        const fetchImg = async () => {
            if (!props.photoReference) {
                setIsLoading(false)
                return;
            }
            
            const extrackPhotoId = props.photoReference.name.split("/").pop();

            if (!extrackPhotoId) {
                console.warn("文字を抽出できませんでした")
                setIsLoading(false)
                return;
            }

            const queryParams = new URLSearchParams({
                heightPx: String(props.photoReference.heightPx) ?? "100",
                widthPx: String(props.photoReference.widthPx) ?? "200"
            })

            const URL = `${BASE_URL}/api/v2/spots/places/${props.place_id}/photo/${extrackPhotoId}?${queryParams.toString()}`

            const photoUriObj = await fetcher<PlacePhotoUriResponse>(URL)

            setDispatchV2Plan(prev => {
                const newPlan = { ...prev };
                newPlan.plan = [...prev.plan]; 

                newPlan.plan[props.activeIndex] = {
                    ...prev.plan[props.activeIndex],
                    Routes: prev.plan[props.activeIndex].Routes.map(place => {
                        if (place.category === "TRAFFIC") return place; // TRAFFIC カテゴリの場合はそのまま返す
                    
                        if (place.spot.place_id === props.place_id) {
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

            setIsLoading(false)
        }

        fetchImg()

    }, [props.place_id, props.photoReference])

    return (
        <div className={classes.container}>
            <LazyImage 
                isLoading={isLoading}
                spotImgSrc={props.spotImgSrc.length > 0 ? props.spotImgSrc : null}
                imgSize={props.imgSize}
            />
            <div className={classes.spot}>
                <p className={classes.text}>{props.spotName}</p>
                <Button buttonStyles={{ ...props.buttonStyles, width: "80%"}} onClick={props.onClick}>
                    { props.text }
                </Button>
            </div>
        </div>
    )
}

export default WayPointCard