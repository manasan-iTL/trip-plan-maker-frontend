import { Spot } from "../../../types/types";
import { SpotCard, TextInput } from "../../../ui";
import classes from "./SearchSpot.module.css"

interface Props {
    inputId: string;
    inputValue: string;
    spots: Spot[];
}

const SearchSpot = (props: Props) => {
    return (
        <div className={classes.container}>
            <div>
                <p className={classes.labelArea}>
                    <label className={classes.heading} htmlFor={props.inputId}>行きたい場所</label>
                    <span className={classes.subText}>例　東京スカイツリー</span>
                </p>
                <TextInput id={props.inputId} value={props.inputValue} iconSize="20px"/>
            </div>
            <div>
                <p className={classes.heading}>検索結果</p>
                { props.spots.length? props.spots.map(spot => (
                    <SpotCard spotName={spot.spotName} spotImgAlt={spot.spotImgAlt} spotImgSrc={spot.spotImgSrc}/>
                )) 
                :null
                }
            </div>
        </div>
    )
}

export default SearchSpot