import { AiOutlineSearch } from "react-icons/ai"
import { IconContext } from "react-icons";
import classes from "./Input.module.css"
interface Props {
    value: string;
    iconSize: string;
}

const TextInput = (props: Props) => {
    return (
        <IconContext.Provider value={{ "className": classes.icon }}>
            <div className={classes.container}>
                <div className={classes.inputArea}>
                    <input type="text" value={props.value} className={classes.input}/>
                </div>
                <div className={classes.iconArea}>
                    <AiOutlineSearch size={props.iconSize}/>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default TextInput