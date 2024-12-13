import React from "react";


interface Props {
    value: string;
    checked: boolean;
    labelName: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio = (props: Props) => {
    return (
        <div>
            <input 
                type="radio" 
                value={props.value} 
                checked={props.checked}
                onChange={(e) => props.onChange(e)}
            />
            <label>{props.labelName}</label>
        </div>
    )
}

export default Radio