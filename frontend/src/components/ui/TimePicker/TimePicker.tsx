import { ChangeEvent } from "react"
import BasePicker from "./BasePicker"
import styles from "./TimePicker.module.css"

interface Props {
    name: string,
    hourOptions: string[],
    minuteOptions: string[],
    selectedHour: string,
    selectedMinute: string,
    labelName: string,
    setSelectedHour: (e: ChangeEvent<HTMLSelectElement>) => void,
    setSelectedMinute: (e: ChangeEvent<HTMLSelectElement>) => void
}

const TimePicker: React.FC<Props> = ({ 
    name, 
    hourOptions, 
    minuteOptions, 
    selectedHour, 
    selectedMinute,
    labelName,
    setSelectedHour,
    setSelectedMinute 
}) => {

    return (
        <div className={styles.container}>
            <BasePicker 
                id={`${name}-hour`}   
                options={hourOptions}
                selectedItem={selectedHour}
                onChange={setSelectedHour}
            />
            <span>:</span>
            <BasePicker 
                id={`${name}-minute`}
                options={minuteOptions}
                selectedItem={selectedMinute}
                onChange={setSelectedMinute}
            />
        </div>
    )
}

export default TimePicker