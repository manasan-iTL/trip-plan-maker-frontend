import { Accordion } from "../../types/types"
import AccordionItem from "../../ui/Accordion/AccordionItem"
import Checkbox from "../../ui/checkbox/Checkbox"
import classes from "./Accordions.module.css"

interface Props {
    accordionItems: Accordion[],
}

const Accordions = (props: Props) => {
    return (
        <div className={classes.container}>
            { props.accordionItems && 
              props.accordionItems.map(item => (
                <AccordionItem key={item.titleName} categoryName={item.titleName} active={item.active} >
                    { item.childItems.map(childItem => 
                        <Checkbox id={childItem.id} 
                                  labelName={childItem.value} 
                                  value={childItem.value} 
                                  style={{}} 
                                  checked={childItem.checked}
                                  key={childItem.id}
                        />
                    ) }
                </AccordionItem>
              )) }
        </div>
    )
}

export default Accordions