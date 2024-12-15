import classes from "./PlanHeader.module.css"
import { Tab } from "../../../ui";
import { LuPlusCircle } from "react-icons/lu";

interface Props {
    indexLength: number;
    activeIndex: number;
    handleTabActive: (index: number) => void;
}

const PlanHeader = (props: Props) => {
    return (
        <section>
        <div className={classes.stayDays}>
            <div className={classes.tabContainer}>
                { Array.from({length: props.indexLength}, (_, index) => (
                    <Tab
                        key={index}
                        text={`${index + 1}日目`}
                        active={props.activeIndex === index? true: false}
                        onClick={() => props.handleTabActive(index)}
                        styles={{}}
                    />
                )) }
            </div>
        </div>
    </section>
    )
} 

export default PlanHeader