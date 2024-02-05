import React from "react";
import classes from "./FixedPointCard.module.css"
import { Spot } from "../../types/types";
import Button from "../Button/Button";

type Props = 
     { 
        spotName: string;
        type: string;
        buttonStyles?: React.CSSProperties
        text: string
        onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
        disabled?: boolean;
    }

const FixedPointCard = (props: Props) => {
    return (
        <div className={classes.container}>
            <div className={classes.imgArea}>
                {props.type}
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

export default FixedPointCard