import { useState } from "react"
import classes from "./RouteTraffic.module.css"
import { FaTrainSubway, FaCar } from "react-icons/fa6"
import { FaWalking } from "react-icons/fa"
import { TrafficCard } from "../../../types/types"
import { convertDayFormatToString } from "../../../../util/convertDayFormat"

interface Props {
    route: TrafficCard
}

const RouteTraffic = (props: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleIsOpen = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <div className={classes.trafficCard}>
        <div className={classes.trainIconContainer}>
            <button className={classes.trainIconButton} onClick={() => handleIsOpen()}>
                {
                    props.route.routes[0].way === "CAR"? <FaCar size={"50px"} />:
                    props.route.routes[0].way === "TRAIN"? <FaTrainSubway size={"50px"} />:
                    <FaWalking size={"50px"}/>
                }
            </button>
        </div>
        {isOpen && ( 
            <div className={classes.trafficContainer}>
                <h3 className={classes.routesHeading}>経路</h3>
                <div className={classes.trafficDeparture}>
                    出発地: {props.route.routes[0].departure}
                </div>
                <div className={classes.trafficRoute}>
                    <div className={classes.trafficTime}>
                            {props.route.routes[0].way}
                    </div>
                    <div className={classes.trafficWay}>
                        <p>-</p>
                    </div>
                </div>
                <div className={classes.trafficDestination}>
                    目的地: {props.route.routes[0].arrive}
                </div>
            </div>
        )}
    </div>

    )
}

export default RouteTraffic