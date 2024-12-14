import React from "react";
import SearchSpot from "../Box/SearchSpot";
import { Spot } from "../../../types/v2Types"
import classes from "./SearchAreaForm.module.css"

interface Props {
    spotValue: string;
    handleSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    spots: Spot[] | undefined
    handleAddSpot: (e: React.MouseEvent<HTMLButtonElement>, spotName: string) => void
}

const SearchAreaForm = (props: Props) => {

    return (    
        <section className={classes.container}>
            {/* 検索フォーム */ }
            <div className={classes.form}>
                <SearchSpot 
                    inputValue={props.spotValue} 
                    spots={props.spots}
                    onChange={props.handleSearchValueChange}
                    searchBtnClick={props.searchBtnClick}
                    handleAddSpot={props.handleAddSpot}
                />
            </div>
        </section>
    )
}

export default SearchAreaForm