import { ReactNode } from "react";
import classes from "./Title.module.css"

interface Props {
    children: ReactNode;
}

const Title = (props: Props) => {
    return (
        <h1 className={classes.heading}>
            { props.children }
        </h1>
    )
}

export default Title