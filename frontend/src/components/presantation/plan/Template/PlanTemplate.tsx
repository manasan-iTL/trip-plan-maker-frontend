import { LuPlusCircle } from "react-icons/lu"
import { FaTrainSubway } from "react-icons/fa6"
import { FaWalking } from "react-icons/fa"
import { Title, Radio, Tab, FixedPointCard, WayPointCard, Button } from "../../../ui"
import classes from "./PlanTemplate.module.css"
import { useState } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { BasicInfo, Plan, PlanDetailsResponse } from "../../../types/types"
import PlanHeader from "../Area/PlanHeader"
import DayPlan from "../Area/DayPlan"
import { convertDayFormat } from "../../../../util/convertDayFormat"
import { v2Plan } from "../../../types/v2Types"
import Header from "../../../ui/Header/Header"

interface Props {
    basicInfo: BasicInfo,
    activeIndex: number,
    handleTabActive: (index: number) => void
    plan: v2Plan,
    navigate: NavigateFunction
}

const PlanTemplate = (props: Props) => {
    return (
        <div>
            <Header />
            { 
                props.plan && props.basicInfo && props.basicInfo.startDay && props.basicInfo.endDay? (
                <main className={classes.container}>
                    <Title>推薦する旅行プラン</Title>
                    <div className={classes.infoContainer}>
                        <dl className={classes.inputBox}>
                            <dt className={classes.labelConitainer}>
                                <label className={classes.label} htmlFor="出発">出発日</label>
                            </dt>
                            <dd className={classes.inputContainer}>
                                <input id="出発" type="date" value={props.basicInfo.startDay} className={classes.input} />
                            </dd>
                        </dl>
                        <dl className={classes.inputBox}>
                            <dt className={classes.labelConitainer}>
                                <label className={classes.label} htmlFor="滞在">帰宅日</label>
                            </dt>
                            <dd className={classes.inputContainer}>
                                <input id="滞在" type="date" value={props.basicInfo.endDay} className={classes.input} />
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <PlanHeader 
                            activeIndex={props.activeIndex}
                            handleTabActive={props.handleTabActive}
                            indexLength={props.plan.length} 
                        />
                        <DayPlan dayPlan={props.plan[props.activeIndex]} navigate={props.navigate}/>
                    </div>
                </main>)
                : (<div>Loading・・・</div>)
            }
        </div>
    )
}

export default PlanTemplate