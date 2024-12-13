import { Extrack, RecommendCombinedSpots, Spot } from "../../../types/v2Types"
import AccordionWithComponent from "../../../ui/Accordion/AccordionWithComponent";
import classes from "./ListItem.module.css"

interface Props {
    spots: Spot[];
    indexNumber: number;
    extrackList: Extrack[];
    selectedValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ListItem = ({ spots, indexNumber, extrackList, selectedValue, onChange }: Props) => {

    console.log("spotsの中身")
    console.log(spots)

    const eatingSpots = spots.filter(spot => spot.types.includes("restaurant"))
    const hotelSpots = spots.filter(spot => ["spa","hotel"].some(type => spot.types.includes(type)))
    const recommendSpots = spots.filter(spot => ["tourist_attraction", "point_of_interest"].some(type => spot.types.includes(type)))

    
    return (
        <div className={classes.container}>
            <AccordionWithComponent 
                title={`テーマ${indexNumber + 1}: `} 
                extrack={extrackList[indexNumber]}
                selectedValue={selectedValue}
                onChange={onChange}
            >
                <div className={classes.container}>
                    <h3>食事場所</h3>
                    {
                        eatingSpots.map(spot => (
                            <div>
                                <ul>
                                    <li>名前: { spot.spotName }</li>
                                    <li>住所: { spot.formattedAddress }</li>
                                    <li>評価: { spot.rating }</li>
                                </ul>
                            </div>
                        )) 
                    }
                    <h3>ホテル</h3>
                    {
                        hotelSpots.map(spot => (
                            <div>
                                <ul>
                                    <li>名前: { spot.spotName }</li>
                                    <li>住所: { spot.formattedAddress }</li>
                                    <li>評価: { spot.rating }</li>
                                </ul>
                            </div>
                        )) 
                    }
                    <h3>おすすめの観光スポット</h3>
                    {
                        recommendSpots.map(spot => (
                            <div>
                                <ul>
                                    <li>名前: { spot.spotName }</li>
                                    <li>住所: { spot.formattedAddress }</li>
                                    <li>評価: { spot.rating }</li>
                                </ul>
                            </div>
                        )) 
                    }
                </div>
            </AccordionWithComponent>
        </div>
    )
}

export default ListItem