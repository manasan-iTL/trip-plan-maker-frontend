type Prefecture = {
    id: string;
    value: string;
    checked: boolean;
}

export type Purpose = {
    id: string;
    value: string;
    checked: boolean;
}

// interface Purposes {
//     purpose: Purpose;
//     onChange: (value: string) => void
// }

// interface Prefectures {
//     prefecture: Prefecture;
//     onChange: (value: string) => void
// }

type AccordionChild = Prefecture | Purpose

export type TabActive = "SPOT" | "AREA"

export type Spot = {
    id: string;
    spotName: string;
    spotImgSrc: string;
    spotImgAlt: string;
    location: { lat: number, lng: number}
    type: string[];
    photoReference?: string;
}

export interface Accordion {
    titleName: string;
    childItems: AccordionChild[];
}

export type Context = {
    selectPurposes: string[],
    handleChangeCheckbox: (labelName: string) => void
}

// プラン作成画面で使用するProps

// export type Plan = {
//     routes: string[],
//     conditions: {}
// }

// State関係

export interface purposeState {
    checked: boolean;
    value: string;
    id: string;
}

export interface prefectureState {
    titleName: string;
    childItems: Prefecture[]
}

export type PlanRequestBody = {
    // 基本情報（宿泊日、交通手段、観光スポット）
    spots: Spot[],
    basicInfo: BasicInfo,
    purposes: string[],
    area: string[]
}

export type PlanDetailsResponse = {
    // 基本情報（交通手段、宿泊日）
    // ルート情報→１日ごとのルート→個々のスポット情報（出発地、目的地＝１枚、食事＝１枚以上、）
    basicInfo: BasicInfo,
    plan: Plan
}

export type PhotosRequestBody = {
    referenses: photoReference[]
}

export type PhotosResponseBody = {
    photos: Photo[]
}

export type BasicInfo = {
    transportion: "CAR" | "PUBLIC",
    startDay: string,
    endDay: string,
}

export type Plan = DayPlan[]

export type DayPlan = {
    Routes: Route[],
}

export type Route = SpotCard | TrafficCard

export type SpotCard = {
    category: "SPOT",
    spot: Spot,
    arrived_at: string,
    departure_at: string,
    type: SpotType
}

export type TrafficCard = {
    category: "TRAFFIC",
    routes: TrafficRoute[]
}

export type TrafficRoute = {
    way: "WALKING" | "TRAIN" | "CAR" | "BUS",
    departure: string,
    arrive: string
}

// EATINGの判定は,typesで'restaurant', 'food'だった場合
export type SpotType = "DEPARTURE" | "DESTINATION" | "EATING" | "WAYPOINT"

export type photoReference = {
    id: string;
    photoReference: string;
}

export type Photo = {
    id: string;
    spotImgSrc: string;
}