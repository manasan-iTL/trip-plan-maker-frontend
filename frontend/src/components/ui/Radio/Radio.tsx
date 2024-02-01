

interface Props {
    value: string;
    checked: boolean;
    labelName: string;
}

const Radio = (props: Props) => {
    return (
        <div>
            <input 
                type="radio" 
                value={props.value} 
                checked={props.checked}
            />
            <label>{props.labelName}</label>
        </div>
    )
}

export default Radio