import PlanTemplate from "../presantation/plan/Template/PlanTemplate"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useV2PlanContext } from "../../hooks/context/v2PlanContext"
import { v2GPhoto, v2PlanDetailResponse } from "../types/v2Types"

const PlanContainer = () => {
    const { state } = useV2PlanContext()

    const location = useLocation()
    const data = location.state as v2PlanDetailResponse

    const [activeIndex, setActiveIndex] = useState<number>(0)
    const navigate = useNavigate()

    const handleTabActive = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <PlanTemplate
            basicInfo={state?.basicInfo} 
            plan={state?.plan}
            navigate={navigate}
            activeIndex={activeIndex}
            handleTabActive={handleTabActive}
        />
    )
}

export default PlanContainer