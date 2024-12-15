import React, { ChangeEvent, useState } from "react";
import { AccordionItem, DateInput, NumberInput, TimePicker } from "../../../ui";
import classes from "./MoreConditions.module.css";
import { calculateTotalDays } from "../../../../util/date";
import { HOURS, MINUTES } from "../../../../data/initialData";
import { ActiveTime, TripDateTime } from "../../../types/v2Types";

interface Props {
  tripDate: TripDateTime;
  activeTimes: ActiveTime[];
  onDateInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const MoreConditions: React.FC<Props> = ({ tripDate, activeTimes, onDateInputChange, onDateSelectChange }) => {
  return (
    <div className={classes.container}>
      <AccordionItem categoryName="旅行の日程を設定する">
        <div className={classes.inputArea}>
          <DateInput labelName="出発日" id="depatureAt" value={tripDate.depaturesAt} onChange={onDateInputChange} />
          <DateInput labelName="帰宅日" id="returnAt" value={tripDate.destinationsAt} onChange={onDateInputChange} />
        </div>
        <div className={classes.inputsArea}>
          {activeTimes.map((activeTime) => (
            <div key={activeTime.key}>
              <p>{`${activeTime.key}の行動時間`}</p>
              <div className={classes.selectDateContainer}>
                <TimePicker
                  name={`${activeTime.key}-start`}
                  hourOptions={HOURS}
                  minuteOptions={MINUTES}
                  selectedHour={activeTime.start.hour}
                  selectedMinute={activeTime.start.minute}
                  labelName={`${activeTime.key}の出発時間`}
                  setSelectedHour={onDateSelectChange}
                  setSelectedMinute={onDateSelectChange}
                />
                <span>~</span>
                <TimePicker
                  name={`${activeTime.key}-end`}
                  hourOptions={HOURS}
                  minuteOptions={MINUTES}
                  selectedHour={activeTime.end.hour}
                  selectedMinute={activeTime.end.minute}
                  labelName={`${activeTime.key}の到着時間`}
                  setSelectedHour={onDateSelectChange}
                  setSelectedMinute={onDateSelectChange}
                />
              </div>
            </div>
          ))}
        </div>
      </AccordionItem>
    </div>
  );
};

export default MoreConditions;
