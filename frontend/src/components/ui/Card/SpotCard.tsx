import React from "react";
import classes from "./SpotCard.module.css"
import { Spot } from "../../types/types";
import Button from "../Button/Button";

type Props = Spot & { imgSize: React.CSSProperties }

const SpotCard = (props: Props) => {
    return (
        <div className={classes.container}>
            <div className={classes.imgArea}>
                <img src={props.spotImgSrc} alt={props.spotImgAlt} className={classes.img} style={props.imgSize}/>
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