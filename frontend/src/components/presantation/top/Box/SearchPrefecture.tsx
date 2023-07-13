import Accordions from "../Accordions"
import { Accordion } from "../../../types/types"
import { Button } from "../../../ui"
import classes from "./SearchPrefecture.module.css"

interface Props {
    accordionItems: Accordion[]
}

const SearchPrefecture = (props: Props) => {
    return (
        <div className={classes.container}>
            <div>
                <label htmlFor="" className={classes.heading}>行きたいエリアを選択する</label>
            </div>
            <div className={classes.accordions}>
                <Accordions accordionItems={props.accordionItems}/>
                <Button buttonStyles={{width: "80%"}} containerStyles={{textAlign: "center"}}>
                    追加
                </Button>
            </div>
        </div>
    )
}

export default SearchPrefecture