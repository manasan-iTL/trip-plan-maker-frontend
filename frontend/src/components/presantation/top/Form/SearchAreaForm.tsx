import React from "react";
import { Tab } from "../../../ui"
import SearchSpot from "../Box/SearchSpot";
import SearchPrefecture from "../Box/SearchPrefecture";
import { Accordion, TabActive } from "../../../types/types";
import { Spot } from "../../../types/v2Types"
import classes from "./SearchAreaForm.module.css"
import { useCallback, useState } from "react";

interface Props {
    TabActive: TabActive;
    spotValue: string;
    handleSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    spots: Spot[] | undefined
    accordionItems: Accordion[];
    onChangeCheckbox: (value: string) => void;
    handleAddSpot: (e: React.MouseEvent<HTMLButtonElement>, spotName: string) => void
}

const SearchAreaForm = (props: Props) => {

    const [tabActive, setTabActive] = useState<TabActive>("SPOT")

    const handleTabClick = useCallback(() => {
        setTabActive(prevState => prevState === "SPOT"? "AREA": "SPOT")
    }, [tabActive])

    return (
        
        <section className={classes.container}>
            {/* タブグループ */ }
            <div className={classes.tabArea}>
                <Tab 
                    styles={{width: "130px", height: "30px"}} 
                    text="検索から探す" 
                    active={tabActive === "SPOT"? true: false}
                    onClick={handleTabClick}
                />
                <span className={classes.tabLine}></span>
                <Tab 
                    styles={{width: "130px", height: "30px"}} 
                    text="エリアから探す" 
                    active={tabActive === "AREA"? true: false}
                    onClick={handleTabClick}
                />
            </div>
            {/* 検索フォーム */ }
            <div className={classes.form}>
                { tabActive === "SPOT"? <SearchSpot 
                                            inputValue={props.spotValue} 
                                            spots={props.spots}
                                            onChange={props.handleSearchValueChange}
                                            searchBtnClick={props.searchBtnClick}
                                            handleAddSpot={props.handleAddSpot}
                                        /> 
                                        : <SearchPrefecture accordionItems={props.accordionItems} onChangeCheckbox={props.onChangeCheckbox}/> }
                
            </div>
        </section>
    )
}

export default SearchAreaForm