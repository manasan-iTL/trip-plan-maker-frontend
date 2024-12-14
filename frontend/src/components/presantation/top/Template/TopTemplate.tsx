import React, { useState } from "react"
import PurposeForm from "../Form/PurposeForm"
import { Accordion, TabActive } from "../../../types/types"
import { ActiveTime, Location, PurposeItem, Spot, TripDateTime } from "../../../types/v2Types"
import TravelSpots from "../Box/TravelSpots"
import SearchAreaForm from "../Form/SearchAreaForm"
import classes from "./TopTemplate.module.css"
import MoreConditions from "../Form/MoreCondiontions"
import { Button, Radio, TextInput, Title } from "../../../ui"
import Header from "../../../ui/Header/Header"

interface Props {
    purposes: PurposeItem[];
    selectedCount: number;
    selectSpots: Spot[] | undefined;
    spots: Spot[] | undefined;
    spotValue: string;
    handleSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    handleChangePurposeCheckbox: (value: string) => void;
    handleAddSpot: (e: React.MouseEvent<HTMLButtonElement>, spotName: string) => void;
    handleReduceSpot: (e: React.MouseEvent<HTMLButtonElement>, spotName: string) => void;
    handleClickNextPage: () => void;
    tripDate: TripDateTime,
    activeTimes: ActiveTime[],
    onDateInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onDateSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    location: Location | null,
    address: string,
    depatureAt: string | null,
    onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TopTemplate = (props: Props) => {

    return (
        <div>
            <Header />
            <main className={classes.container}>
                <Title>旅行プランを作成する</Title>
                <PurposeForm 
                    purposes={props.purposes}
                    selectedCount={props.selectedCount}
                    onChange={props.handleChangePurposeCheckbox}
                />
                <div className={classes.travelSpotsArea}>
                    { /*  行きたいエリアカードを表示する　選択されたエリアはコンテナ層で計算した値を渡す  */ }
                    <TravelSpots selectSpots={props.selectSpots} handleReduceSpot={props.handleReduceSpot}/>
                    <SearchAreaForm  
                        spotValue={props.spotValue}
                        spots={props.spots}
                        handleSearchValueChange={props.handleSearchValueChange}
                        searchBtnClick={props.searchBtnClick}
                        handleAddSpot={props.handleAddSpot}
                    />
                </div>
                <section className={classes.travelDepatureArea}>
                    <h3>出発地</h3>
                    <div>
                        <Radio 
                            labelName="現在地" 
                            value="geolocation" 
                            checked={props.depatureAt === "geolocation" ? true: false}
                            onChange={props.onRadioChange}
                        />
                        <p>{(props.location && typeof props.location !== 'string') ? `${props.location.latitude} ${props.location.longitude}` : ""}</p>
                        <Radio 
                            labelName="出発地の住所を入力する" 
                            value="address" 
                            checked={props.depatureAt === "address" ? true: false}
                            onChange={props.onRadioChange}
                        />
                        {
                            props.depatureAt === "address" ? <TextInput value={props.address} onChange={props.onAddressChange}/> :  null
                        }
                    </div>
                </section>
                <MoreConditions 
                    tripDate={props.tripDate}
                    activeTimes={props.activeTimes}
                    onDateInputChange={props.onDateInputChange}
                    onDateSelectChange={props.onDateSelectChange}
                />
                <Button buttonStyles={{width: "70%"}} containerStyles={{textAlign: "center"}} onClick={props.handleClickNextPage}>
                    仮想プランを作成する
                </Button>
            </main>
        </div>
    )
}

export default TopTemplate