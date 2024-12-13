import DayPlan from "../components/presantation/plan/Area/DayPlan"

export const convertDayFormat = (date: string) => {
    const new_date = date.split("-")

    if (date[2].length === 1) {
        const new_day = "0" + date[2]

        return {
            year: new_date[0],
            month: new_date[1],
            day: new_day,
            hour: new_date[3],
            minute: new_date[4]
        }
    }

    return {
        year: new_date[0],
        month: new_date[1],
        day: new_date[2],
        hour: new_date[3],
        minute: new_date[4]
    }
}

export const convertDayFormatToString = (date: string) => {
    const new_date = date.split("-")

    return `${new_date[0]}年${new_date[1]}月${new_date[2]}日${new_date[3]}時${new_date[4]}分`
}