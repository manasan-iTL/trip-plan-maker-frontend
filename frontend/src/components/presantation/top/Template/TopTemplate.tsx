import PurposeForm from "../Form/PurposeForm"
import { Accordion, Purpose, Spot, TabActive } from "../../../types/types"
import TravelSpots from "../Box/TravelSpots"
import SearchAreaForm from "../Form/SearchAreaForm"
import classes from "./TopTemplate.module.css"

interface Props {
    purposes: Purpose[];
    spots: Spot[];
    tabActive: TabActive;
    spotInputId: string;
    spotValue: string;
    accordionItems: Accordion[]
}

const TopTemplate = (props: Props) => {
    return (
        <div>
            <main className={classes.container}>
                <h1 className={classes.heading}>旅行プラン</h1>
                <PurposeForm purposes={props.purposes}/>
                <div className={classes.travelSpotsArea}>
                    <TravelSpots spots={props.spots}/>
                    <SearchAreaForm 
                        TabActive={props.tabActive} 
                        spotInputId={props.spotInputId}
                        spotValue={props.spotValue}
                        spots={props.spots}
                        accordionItems={props.accordionItems}
                    />
                </div>
            </main>
        </div>
    )
}

export default TopTemplate