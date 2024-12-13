import { ChangeEvent } from "react";
import styles from "./BasePicker.module.css"

interface Props {
    id: string,
    options: string[],
    selectedItem: string,
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}


const BasePicker: React.FC<Props> = ({ id, options, selectedItem, onChange }) => {
    
    return (
        <div className={styles.inputArea}>
            <select 
                name={id} 
                id={id}
                value={selectedItem}
                onChange={(e) => onChange(e)}
                className={styles.select}
            >
                { options.map(
                    (option) => <option key={option} value={option} className={styles.option}>{ option }</option>
                )}
            </select>
        </div>
    );
}

export default BasePicker