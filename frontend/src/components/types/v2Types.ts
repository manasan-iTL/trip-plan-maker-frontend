import { BasicInfo } from "./types";

export type Spot = {
    place_id: string,
    spotName: string;
    spotImgSrc: string;
    spotImgAlt: string;
    location: Location
    rating: number;
    userRatingCount: number;
    types: string[];
    formattedAddress: string,
    photoReference: v2GPhoto;
}

export type resSpot = {
    displayName: {
        text: string
    },
    rating: number;
    formattedAddress: string;
    types: string[];
    id: string;
    location: { latitude: number, longitude: number}
}

export type SearchSpotsRequestBody = {
    spots?: Spot[],
    area?: string,
    depatureAt: Spot,
    date: {
        depatureDay: string,
        returnDay: string,
    },
    activeTimes: TripDateTime[],
    transitWay: 'CAR' | 'train',
    condition?: Condition
}

export type SearchSpotsResponseBody = {
    combineSpots: PlacePattern[],
    origin: Spot,
    activeTimes: TripDateTime[],
    date: {
        depatureDay: string,
        returnDay: string,
    },
}

export interface PlaceDetailResponse {
    place_id: string,
    nationalPhoneNumber: string,
    websiteUri: string,
    regularOpeningHours: RegularOpeningHours,
    priceLevel: PriceLevel,
    editorialSummary: {
        text: string;
        languageCode: string
    },
    userRatingCount: number;
}

export type RecommendCombinedSpots = {combineSpots: PlacePattern[]}

type PlacePattern = {
    theme: string;
    places : Spot[];
}

type Condition = {
    eating: string[],
    wantedDo: string[],
    hotel: string[]
}

export type Extrack = {
    theme: string,
    eatingSpot: Spot,
    hotelSpot: Spot,
    recommendSpot: Spot,
}

export type RouteSpot = {
    displayName: {
        text: string,
        languageCode: string,
    };
    types: string[];
    rating: number;
    userRatingCount: number;
    location: {
        latitude: number,
        longitude: number,
    },
    place_id: string,
    formattedAddress?:string
}

export type v2RoutesReq = {
    originSpot: Spot,
    waypoints: Spot[],
    destinationSpot: Spot,
    activeTimes: TripDateTime[],
    date: {
        depatureDay: string,
        returnDay: string,
    },
    theme: string
}

export type v2PlanDetailResponse = {
    basicInfo: BasicInfo,
    plan: v2Plan
}

export type v2Plan = v2DayPlan[]

export type v2DayPlan = {
    Routes: v2Route[],
}

export type v2Route = v2SpotCard | TrafficCard

export type v2SpotCard = {
    category: "SPOT",
    spot: Spot,
    arrived_at: string,
    departure_at: string,
    type: SpotType
}

type TrafficCard = {
    category: "TRAFFIC",
    routes: TrafficRoute[]
}

type TrafficRoute = {
    way: "WALKING" | "TRAIN" | "CAR" | "BUS",
    departure: string,
    arrive: string
}

type SpotType = "DEPARTURE" | "DESTINATION" | "EATING" | "WAYPOINT"

export type v2GPhoto = {
    name: string,
    widthPx: number,
    heightPx: number
}

export type PlacePhotoUriResponse = {
    name: string,
    photoUri: string
}

interface RegularOpeningHours {
    periods: Period[],
    weekdayDescriptions: string[],
    secondaryHoursType: SecondaryHoursType,
    specialDays: SpecialDay[]
    openNow: boolean
}

interface Period {
    open: Point,
    close: Point
}

interface Point {
    date: GDate,
    truncated: boolean,
    day: number,
    hour: number,
    minute: number
}

interface GDate {
    year: number,
    month: number,
    day: number
}

type SecondaryHoursType = 
    "SECONDARY_HOURS_TYPE_UNSPECIFIED" |
    "DRIVE_THROUGH" |
    "HAPPY_HOUR" |
    "DELIVERY" |
    "TAKEOUT" |
    "KITCHEN" |
    "BREAKFAST" |
    "LUNCH" |
    "DINNER" |
    "BRUNCH" |
    "PICKUP" |
    "ACCESS" |
    "SENIOR_HOURS" |
    "ONLINE_SERVICE_HOURS"

interface SpecialDay {
    date: GDate
}

type PriceLevel = 
    "PRICE_LEVEL_UNSPECIFIED" |
    "PRICE_LEVEL_FREE" |
    "PRICE_LEVEL_INEXPENSIVE" |
    "PRICE_LEVEL_MODERATE" |
    "PRICE_LEVEL_EXPENSIVE" |
    "PRICE_LEVEL_VERY_EXPENSIVE"

export interface TripDateTime {
    depaturesAt: string,
    destinationsAt: string
}

interface TimePicker {
    hour: string,
    minute: string
}

export interface ActiveTime {
    key: string,
    start: TimePicker
    end: TimePicker
}

export interface Location {
    latitude: number, 
    longitude: number
}

/**
 * 
 * Props interface
 * 
 * 
 */

export interface DetailTemplateProps {
    spot: (Spot & PlaceDetailResponse) | null
}

/**
 * 
 * UI用型定義
 * 
 */

export interface PurposeItem {
    checked: boolean;
    value: string;
    id: string;
    label: string;
}

export interface Purpose {
    titleName: string,
    childItem: PurposeItem
}

/**
 * 
 * エラー系の型定義
 */

export type ValidationErrorType = 
    'NOT_FOUND_WANTED_PLACE' |
    'TOO_MANY_WANTED_PLACE' |
    'NOT_FOUND_PUREPORSES' |
    'TOO_MANY_PURPOSES' |
    'NOT_FOUND_DEPATURE' |
    'NOT_FOUND_THEME'

export interface ValidationError {
    type: ValidationErrorType,
    message: string
}

export interface ApiError {
    type: 'NETWORK_ERROR' | 'NOT_FOUND_THEME' | 'NOT_FOUND_PLAN',
    message: string
}

export interface ErrorResponse {
    success: boolean,
    message: string
}