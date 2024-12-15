import TopTemplate from "../presantation/top/Template/TopTemplate";
import { ActiveTime, ApiError, ErrorResponse, Location, PurposeItem, Spot, TripDateTime, ValidationError } from "../types/v2Types";
import { getTodayDate, initalActiveTime, initialPurposes, prefecturesData } from "../../data/initialData";
import React, { useContext, useState } from "react";
import { useFetchSpots } from "../../hooks/useFetchSpots";
import { useNavigate, useOutletContext } from "react-router-dom";
import { fetcher, postFetcher } from "../../hooks/fetcher";
import { BASE_URL } from "../../data/constant";
import { usePlanContext } from "../../hooks/context/planContext";
import { SearchSpotsRequestBody, SearchSpotsResponseBody } from "../types/v2Types";
import { useSearchSpotContext } from "../../hooks/context/searchSpotContext";
import { calculateTotalDays } from "../../util/date";
import axios, { AxiosError } from "axios";

const TopContainer = () => {
  const [selectSpots, setSelectSpots] = useState<Spot[]>([]);
  const [purposes, setPurposes] = useState<PurposeItem[]>(initialPurposes);
  const [tripDate, setTripDate] = useState<TripDateTime>(getTodayDate());
  const [activeTimes, setActiveTimes] = useState<ActiveTime[]>(initalActiveTime);
  // COMMENT: 緯度経度の情報を持つ（最初はnull）
  const [location, setLocation] = useState<Location | null>(null);
  const [address, setAddress] = useState<string>("");
  const [depatureAt, setDepatureAt] = useState<string | null>(null);
  
  const [spotsData, setSpotsData] = useState<Spot[]>([]);
  const [isSearchSpotError, setIsSearchSpotError] = useState(false)
  const [inputSpotValue, setInputSpotValue] = useState<string>("")

  const { setDispathPhoto, state } = usePlanContext();
  const { setSearchSpots } = useSearchSpotContext();
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const [apiError, setApiError] = useState<ApiError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputSpotValue(e.target.value)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    const URL = `${BASE_URL}/api/spots/?keyword=${inputSpotValue}`

    try {
      const response = await fetcher<Spot[]>(URL);
      setSpotsData(response);
      setInputSpotValue('')
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsSearchSpotError(true)
      setInputSpotValue('')
      setIsLoading(false)
    }
  }

  const handleAddSpot = (e: React.MouseEvent<HTMLButtonElement>, spotName: string) => {
    const selectSpot = spotsData?.filter((spot: Spot) => spot.spotName === spotName);
    if (typeof selectSpot === "undefined") return;
    setSelectSpots((preveState) => [...preveState, ...selectSpot]);
  };

  const handleReduceSpot = (e: React.MouseEvent<HTMLButtonElement>, spotName: string) => {
    setSelectSpots((preveState: Spot[]) => preveState.filter((spot) => spot.spotName !== spotName));
  };

  const handleChangePurposeCheckbox = (value: string) => {
    setPurposes((prevState) => {
      const newPurposes = prevState.map((purpose) => {
        if (purpose.value === value) {
          const newPurpose = { ...purpose, checked: !purpose.checked };
          return newPurpose;
        }
        return purpose;
      });

      return newPurposes;
    });
  };

  const selectedCount = purposes.filter((checkbox) => checkbox.checked).length;

  const handleTripDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripDate((prev) =>
      e.target.id === "depatureAt"
        ? { ...prev, depaturesAt: e.target.value }
        : { ...prev, destinationsAt: e.target.value }
    );

    // COMMENT: 時間を入力するフォームの増減をコントロールする
    const depatureDate = e.target.id === "depatureAt" ? e.target.value : tripDate.depaturesAt;
    const returnDate = e.target.id === "returnAt" ? e.target.value : tripDate.destinationsAt;

    const totalDays = calculateTotalDays(depatureDate, returnDate) ?? 1;

    setActiveTimes((prev) => {
      if (prev.length === totalDays) return prev;

      if (prev.length < totalDays) {
        const rest = totalDays - prev.length;
        const newArr = [...Array(rest)].map((_, index) => ({
          key: `${prev.length + index + 1}日目`,
          start: { hour: "08", minute: "00" },
          end: { hour: "20", minute: "00" },
        }));
        return [...prev, ...newArr];
      }

      const diff = totalDays - prev.length;
      const rest = prev.slice(0, diff);
      return rest;
    });
  };

  const handleActiveTimes = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // COMMENT: idは"O日目-type-hour/minute" o日目 === key, start or end === type
    const [key, type, date] = e.target.id.split("-");

    setActiveTimes((prev) => {
      const newActiveTimes = prev.map((activeTime) => {
        if (activeTime.key === key) {
          if (type === "start") {
            return date === "hour"
              ? { ...activeTime, start: { hour: e.target.value, minute: activeTime.start.minute } }
              : { ...activeTime, start: { hour: activeTime.start.hour, minute: e.target.value } };
          }

          return date === "hour"
            ? { ...activeTime, end: { hour: e.target.value, minute: activeTime.start.minute } }
            : { ...activeTime, end: { hour: activeTime.start.hour, minute: e.target.value } };
        }

        return activeTime;
      });

      return newActiveTimes;
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepatureAt(e.target.value);

    if (e.target.value === "address") {
      setLocation(null);
      return;
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      setLocation(null);
    }
  };

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSuccess = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
  };

  const handleError = (error: GeolocationPositionError) => {
    console.error(error.message);
    alert("この端末、ブラウザでは現在地を取得できません");
    setLocation(null);
  };

  const handleClickNextPage = async () => {
    console.log("Click");
    setIsLoading(true)

    if (!location && address.length < 0) {
      console.warn("出発地が設定されていません！");
      setIsLoading(false)
      setValidationError({
        type: 'NOT_FOUND_DEPATURE',
        message: '出発地は現在地か出発地の住所を設定する必要があります！'
      })
      return false;
    }

    const spotName = !location ? (!address ? "東京都" : address) : "自宅";

    const nowPlace: Spot = {
      place_id: "CHILL_DEPATURE",
      spotName: spotName,
      spotImgSrc: "",
      spotImgAlt: "自宅",
      location: location ?? {
        latitude: 0,
        longitude: 0,
      },
      rating: 0,
      userRatingCount: 0,
      formattedAddress: "",
      types: [],
      photoReference: {
        name: "",
        heightPx: 0,
        widthPx: 0,
      },
    };

    const purposeList = purposes.filter((purpose) => purpose.checked).map((purpose) => purpose.value);

    if (purposeList.length === 0) {
      console.error('目的が1つも選択されていません！')
      setIsLoading(false)
      setValidationError({
        type: 'NOT_FOUND_PUREPORSES',
        message: '目的は1つ以上選択する必要があります！'
      })
      return false;
    }

		if (purposeList.length > 3) {
			console.error('目的は3つまでしか選択できません')
      setIsLoading(false)
      setValidationError({
        type: 'TOO_MANY_PURPOSES',
        message: '目的は最大3つまでしか選択できません！'
      })
			return false
		}

    if (selectSpots.length === 0) {
			console.error('行きたい場所が１つも選択されていません！')
      setIsLoading(false)
      setValidationError({
        type: 'NOT_FOUND_WANTED_PLACE',
        message: '行きたい場所が１つも選択されていません！'
      })
			return false;
    }

    if (selectSpots.length > 3) {
			console.error('行きたい場所は最大3つまでしか選択できません！')
      setIsLoading(false)
      setValidationError({
        type: 'TOO_MANY_WANTED_PLACE',
        message: '行きたい場所は最大3つまでしか選択できません！'
      })
			return false;
    }

    const tripDateTimes: TripDateTime[] = activeTimes.map((activeTime) => {
      const startTime = `${activeTime.start.hour}:${activeTime.start.minute}`;
      const endTime = `${activeTime.end.hour}:${activeTime.end.minute}`;

      return {
        depaturesAt: startTime,
        destinationsAt: endTime,
      };
    });

    const newBody: SearchSpotsRequestBody = {
      spots: selectSpots,
      depatureAt: nowPlace,
      date: {
        depatureDay: tripDate.depaturesAt,
        returnDay: tripDate.destinationsAt,
      },
      transitWay: "CAR",
      area: undefined,
      condition: {
        wantedDo: purposeList,
        eating: [],
        hotel: [],
      },
      activeTimes: tripDateTimes,
    };

    try {
      const result2 = await postFetcher<SearchSpotsRequestBody, SearchSpotsResponseBody>(
        BASE_URL + "/api/v2/spots",
        newBody
      );
      console.log(result2);
      setSearchSpots(result2.data);
      setIsLoading(false)
      navigate("./search");
    } catch (error) {
      console.log(error);
      setIsLoading(false)

      if (axios.isAxiosError(error)) {
        const apiError = error as AxiosError<ErrorResponse>

        if (apiError.response && apiError.response.data) {
          setApiError({
            type: 'NOT_FOUND_THEME',
            message: apiError.response.data.message
          })

          return false;
        }
      }

      setApiError({
        type: 'NOT_FOUND_THEME',
        message: 'テーマの生成ができませんでした。再度お試しください。'
      })

      return false
    }
  };

  const closeSeachSpotsErrorDialog = () => {
    setIsSearchSpotError(false)
  }

  const closeApiErrorDialog = () => {
    setApiError(null)
  }

  return (
    <TopTemplate
      purposes={purposes}
      selectedCount={selectedCount}
      spots={spotsData}
      spotValue={inputSpotValue}
      handleSearchValueChange={handleInputChange}
      searchBtnClick={ handleSubmit }
      handleAddSpot={handleAddSpot}
      handleReduceSpot={handleReduceSpot}
      selectSpots={selectSpots}
      handleClickNextPage={handleClickNextPage}
      handleChangePurposeCheckbox={handleChangePurposeCheckbox}
      tripDate={tripDate}
      activeTimes={activeTimes}
      onDateInputChange={handleTripDateChange}
      onDateSelectChange={handleActiveTimes}
      location={location}
      address={address}
      depatureAt={depatureAt}
      onRadioChange={handleRadioChange}
      onAddressChange={handleAddress}
      validationError={validationError}
      isNetworkError={isSearchSpotError}
      closeSearchSpotsErrorDialog={closeSeachSpotsErrorDialog}
      isApiError={apiError}
      closeApiError={closeApiErrorDialog}
      isLoading={isLoading}
    />
  );
};

export default TopContainer;
