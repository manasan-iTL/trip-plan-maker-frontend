import React from "react";
import classes from "./WayPointCard.module.css"
import { Spot } from "../../types/types";
import Button from "../Button/Button";

type Props = Spot &
     { 
        buttonStyles?: React.CSSProperties
        text: string
        imgSize: React.CSSProperties; 
        onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    }

const WayPointCard = (props: Props) => {
    return (
        <div className={classes.container}>
            <div className={classes.imgArea}>
                <img src={props.spotImgSrc} alt={props.spotImgAlt} className={classes.img} style={props.imgSize}/>
            </div>
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