import { Accordion } from "../../types/types"
import { AccordionItem, Checkbox } from "../../ui"
import classes from "./Accordions.module.css"

interface Props {
    accordionItems: Accordion[];
    onChangeCheckbox: (value: string) => void;
}

const Accordions = (props: Props) => {
    return (
        <div className={classes.container}>
            { props.accordionItems && 
              props.accordionItems.map(item => (
                <AccordionItem key={item.titleName} categoryName={item.titleName} >
                    { item.childItems.map(childItem => 
                        <Checkbox id={childItem.id} 
                                  labelName={childItem.value} 
                                  value={childItem.value} 
                                  checked={childItem.checked}
                                  onChange={() => props.onChangeCheckbox(childItem.value)}
                                  style={{}} 
                                  key={childItem.id}
                        />
                    ) }
                </AccordionItem>
              )) }
        </div>
    )
}

export default Accordions