import React from "react";
import { Spot } from "../../../types/v2Types";
import { SearchInput, SpotCard } from "../../../ui";
import classes from "./SearchSpot.module.css"

interface Props {
    inputValue: string;
    spots: Spot[] | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
    handleAddSpot: (e: React.MouseEvent<HTMLButtonElement>, spotName: string) => void
}

const SearchSpot = (props: Props) => {

    return (
        <div className={classes.container}>
            <div>
                <p className={classes.labelArea}>
                    <label className={classes.heading}>場所検索</label>
                    <span className={classes.subText}>例　東京スカイツリー</span>
                </p>
                <SearchInput value={props.inputValue} iconSize="20px" onChange={props.onChange} onClick={props.searchBtnClick}/>
            </div>
            <div>
                <p className={classes.heading}>検索結果</p>
                { props.spots?.length? props.spots.map(spot => (
                    <SpotCard 
                        {...spot}
                        imgSize={{height: "70px"}}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.handleAddSpot(e, spot.spotName)}
                        key={spot.spotName}
                        text="追加"
                    />
                )) 
                :null
                }
            </div>
        </div>
    )
}

export default SearchSpot