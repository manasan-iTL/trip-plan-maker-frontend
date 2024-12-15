import { AiOutlineSearch } from "react-icons/ai"
import { IconContext } from "react-icons";
import classes from "./SearchInput.module.css"
import React from "react";

type Props = {
    value: string;
    iconSize: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

const SearchInput = (props: Props) => {
    return (
        <IconContext.Provider value={{ "className": classes.icon }}>
            <div className={classes.container}>
                <div className={classes.inputArea}>
                    <input type="text" value={props.value} onChange={props.onChange} className={classes.input}/>
                </div>
                <div className={classes.iconArea}>
                    <button className={classes.searchBtn} onClick={async (e: React.MouseEvent<HTMLButtonElement>) => await props.onClick(e)}>
                        <AiOutlineSearch size={props.iconSize}/>
                    </button>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default SearchInput