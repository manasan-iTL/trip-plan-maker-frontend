import { NavigateFunction } from "react-router-dom"
import { DayPlan as Plan } from "../../../types/types"
import RouteSpot from "./RouteSpot"
import RouteTraffic from "./RouteTraffic"
import classes from "./DayPlan.module.css"
import { v2DayPlan } from "../../../types/v2Types"

interface Props {
    dayPlan: v2DayPlan,
    navigate: NavigateFunction
}

const DayPlan = (props: Props) => {
    return (
        <section className={classes.virtualRoutesContainer}>
            {props.dayPlan.Routes.map((route) => (
                route.category === "SPOT"? <RouteSpot route={route} navigate={props.navigate}/>
                                         : <RouteTraffic route={route}/>
            ) )}
        </section>
    )
}

export default DayPlan