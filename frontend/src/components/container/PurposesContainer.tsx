import { useOutletContext } from "react-router-dom"
import { Context } from "../types/types"

const PurposesContainer = () => {

    const { selectPurposes } = useOutletContext<Context>()
    console.log(selectPurposes)

    return (
        <div>
            <h2>旅行の目的を選択してください</h2>
        </div>
    )
}

export default PurposesContainer