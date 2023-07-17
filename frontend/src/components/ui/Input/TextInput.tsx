import { AiOutlineSearch } from "react-icons/ai"
import { IconContext } from "react-icons";
import classes from "./TextInput.module.css"
import React from "react";

type Props = {
    value: string;
    iconSize: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const TextInput = (props: Props) => {
    return (
        <IconContext.Provider value={{ "className": classes.icon }}>
            <div className={classes.container}>
                <div className={classes.inputArea}>
                    <input type="text" value={props.value} onChange={props.onChange} className={classes.input}/>
                </div>
                <div className={classes.iconArea}>
                    <button className={classes.searchBtn} onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.onClick(e)}>
                        <AiOutlineSearch size={props.iconSize}/>
                    </button>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default TextInput