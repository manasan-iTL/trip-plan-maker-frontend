import { Spot } from "../../../types/types"
import { EmptyCard, SpotCard } from "../../../ui"
import classe from "./TravelSpots.module.css"

interface Props {
    spots: Spot[]
}

const TravelSpots = (props: Props) => {
    return (
        <div className={classe.container}>
            <h2 className={classe.heading}>行きたい場所</h2>
            <div>
                { !props.spots.length ? <EmptyCard text="１つ以上は選択してください" iconNumber={1} /> 
                                     : props.spots.map(spot => <SpotCard {...spot} imgSize={{height: "70px"}}/>)
                }
            </div>
        </div>
    )
}

export default TravelSpots