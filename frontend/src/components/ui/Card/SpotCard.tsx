import classes from "./SpotCard.module.css"
import { Spot } from "../../types/types";
import Button from "../Button/Button";

type Props = Spot

const SpotCard = (props: Props) => {
    return (
        <div className={classes.container}>
            <div className={classes.imgArea}>
                <img src={props.spotImgSrc} alt={props.spotImgAlt} className={classes.img}/>
            </div>
            <div className={classes.spot}>
                <p className={classes.text}>{props.spotName}</p>
                <Button buttonStyles={{width: "80%"}}>
                    追加
                </Button>
            </div>
        </div>
    )
}

export default SpotCard