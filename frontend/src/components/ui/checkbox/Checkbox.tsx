
import classes from "./checkbox.module.css"

interface Props {
    id: string;
    labelName: string;
};

const Checkbox = (props: Props) => {
    return (
        <div className={classes.checkboxArea}>
            <input type="checkbox" name={props.labelName} id= {props.id} />
            <label className={classes.checkboxLabelText} htmlFor={props.labelName}>
                { props.labelName }
            </label>
        </div>
    )
}

export default Checkbox