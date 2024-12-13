import React from "react";
import { Spot } from "../../../types/v2Types"
import { EmptyCard, SpotCard } from "../../../ui"
import classe from "./TravelSpots.module.css"

interface Props {
    selectSpots: Spot[] | undefined;
    handleReduceSpot: (e: React.MouseEvent<HTMLButtonElement>, spotName: string) => void
}

const TravelSpots = (props: Props) => {
    return (
        <div className={classe.container}>
            <h2 className={classe.heading}>行きたい場所</h2>
            <div>
                { !props.selectSpots?.length ? <EmptyCard text="１つ以上は選択してください" iconNumber={1} /> 
                                     : props.selectSpots.map(spot => (
                                     <SpotCard 
                                        {...spot}
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.handleReduceSpot(e, spot.spotName)} 
                                        imgSize={{height: "70px"}}
                                        text="取り消す"
                                        buttonStyles={{backgroundColor: "red"}}
                                        key={spot.spotName}
                                        />
                                     ))
                }
            </div>
        </div>
    )
}

export default TravelSpots