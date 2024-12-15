import classes from "./RouteSpot.module.css"
import { FixedPointCard, WayPointCard } from "../../../ui"
import { NavigateFunction } from "react-router-dom"
import { SpotCard } from "../../../types/types";
import { convertDayFormatToString } from "../../../../util/convertDayFormat";
import { v2SpotCard } from "../../../types/v2Types";
import { extrackPlaceId } from "../../../../util/extrackPlaceId";

interface Props {
    navigate: NavigateFunction;
    route: v2SpotCard
}

const RouteSpot = (props: Props) => {

    const placeId = extrackPlaceId(props.route.spot.place_id)

    const depatureAtSplit = props.route.departure_at.split(':')
    const arrivedAtSplit = props.route.arrived_at.split(':')

    const depatureAt = depatureAtSplit.length > 1? `${depatureAtSplit[0]}:${depatureAtSplit[1]}`: props.route.departure_at
    const arrivedAt = arrivedAtSplit.length > 1? `${arrivedAtSplit[0]}:${arrivedAtSplit[1]}`: props.route.arrived_at

    return (
        <div className={classes.dayRoute}>
        <div className={classes.dayTimes}>
            { 
                props.route.arrived_at &&  
                <div className={classes.dayTime}>
                    {arrivedAt}
                </div>
            }
            {
                props.route.departure_at &&
                <div className={classes.dayTime}>
                    {depatureAt}
                </div>
            }
        </div>

        { props.route.type === "WAYPOINT"?
            <WayPointCard 
                {...props.route.spot}
                text="詳細"
                imgSize={{ height: "70px" }}
                onClick={() => props.navigate(`spots/${placeId}`)}
            />
            :
            <FixedPointCard
                type={props.route.type === "DEPARTURE"? "出発地": props.route.type === "DESTINATION"? "到着地": "食事場所"}
                text="詳細"
                spotName={props.route.spot.spotName}
                onClick={() => props.navigate(`spots/${placeId}`)}
            /> 
        }
    </div>
    )
}

export default RouteSpot