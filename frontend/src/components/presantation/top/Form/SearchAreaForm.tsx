import React from "react";
import SearchSpot from "../Box/SearchSpot";
import { Spot } from "../../../types/v2Types";
import classes from "./SearchAreaForm.module.css";
import { EmptyCard, SpotCard } from "../../../ui";
import ErrorText from "../../../ui/Text/ErrorText";

interface Props {
  spotValue: string;
  handleSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  spots: Spot[] | undefined;
  handleAddSpot: (e: React.MouseEvent<HTMLButtonElement>, spotName: string) => void;
  selectSpots: Spot[] | undefined;
  handleReduceSpot: (e: React.MouseEvent<HTMLButtonElement>, spotName: string) => void
  error?: string
}

const SearchAreaForm = (props: Props) => {
  return (
    <section className={classes.container}>
      <div>
        <h2 className={classes.heading}>行きたい場所</h2>
        { props.error && <ErrorText text={props.error}/> }

        <div className={classes.spotsArea}>
          {!props.selectSpots?.length ? (
            <EmptyCard text="１つ以上は選択してください" iconNumber={1} />
          ) : (
            props.selectSpots.map((spot) => (
              <SpotCard
                {...spot}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.handleReduceSpot(e, spot.spotName)}
                text="取り消す"
                buttonStyles={{ backgroundColor: "red" }}
                key={spot.spotName}
              />
            ))
          )}
        </div>
      </div>

      {/* 検索フォーム */}
      <div className={classes.form}>
        <SearchSpot
          inputValue={props.spotValue}
          spots={props.spots}
          onChange={props.handleSearchValueChange}
          searchBtnClick={props.searchBtnClick}
          handleAddSpot={props.handleAddSpot}
        />
      </div>
    </section>
  );
};

export default SearchAreaForm;
