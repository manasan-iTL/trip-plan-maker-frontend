import { Outlet } from "react-router-dom"
import React, { useState } from "react"

const PurposeProvider = () => {

    const [selectPurposes, setSelectPurposes] = useState<string[]>([])

    const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>,labelName: string) => {
        selectPurposes.some(purpose => purpose === labelName) ? 
        setSelectPurposes(prevState => prevState.filter(purpose => purpose !== labelName)):
        setSelectPurposes(preveState => [...preveState, labelName])
    }

    return (
        <Outlet context={{ selectPurposes, handleChangeCheckbox }} />
    )
}

export default PurposeProvider