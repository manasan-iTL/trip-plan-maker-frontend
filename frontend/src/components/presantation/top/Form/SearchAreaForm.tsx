import { Tab } from "../../../ui"
import SearchSpot from "../Box/SearchSpot";
import SearchPrefecture from "../Box/SearchPrefecture";
import { Accordion, Spot, TabActive } from "../../../types/types";
import classes from "./SearchAreaForm.module.css"

interface Props {
    TabActive: TabActive;
    spotInputId: string;
    spotValue: string;
    spots: Spot[]
    accordionItems: Accordion[]
}

const SearchAreaForm = (props: Props) => {
    return (
        <section className={classes.container}>
            {/* タブグループ */ }
            <div className={classes.tabArea}>
                <Tab styles={{width: "130px", height: "30px"}} text="検索から探す" active={props.TabActive === "SPOT"? true: false}/>
                <span className={classes.tabLine}></span>
                <Tab styles={{width: "130px", height: "30px"}} text="エリアから探す" active={props.TabActive === "AREA"? true: false}/>
            </div>
            {/* 検索フォーム */ }
            <div className={classes.form}>
                { props.TabActive === "SPOT"? <SearchSpot inputId={props.spotInputId} 
                                                          inputValue={props.spotValue} 
                                                          spots={props.spots}
                                               /> 
                                            : <SearchPrefecture accordionItems={props.accordionItems}/> }
                
            </div>
        </section>
    )
}

export default SearchAreaForm