import { PlanDetailsResponse, prefectureState, purposeState } from "../components/types/types"
import { v2Plan, v2PlanDetailResponse, PurposeItem } from "../components/types/v2Types"
import { PlaceType } from "./constant"


export const initialPurposes: PurposeItem[] = [
    {
        id: PlaceType.amusementPark,
        label: "アミューズメントパーク",
        value: PlaceType.amusementPark,
        checked: false
    },
    {
        id: PlaceType.themePark,
        label: "テーマパーク",
        value: PlaceType.themePark,
        checked: false
    },
    {
        id: PlaceType.hiking,
        label: "ハイキング",
        value: PlaceType.hiking,
        checked: false
    },
    {
        id: PlaceType.NaturalScenery,
        label: "自然景観巡り",
        value: PlaceType.NaturalScenery,
        checked: false
    },
    {
        id: PlaceType.marineSports,
        label: "マリンスポーツ",
        value: PlaceType.marineSports,
        checked: false
    },
    {
        id: PlaceType.snowSports,
        label: "スノースポーツ",
        value: PlaceType.snowSports,
        checked: false
    },
    {
        id: PlaceType.famousPlaces,
        label: "名所めぐり",
        value: PlaceType.famousPlaces,
        checked: false
    },
    {
        id: PlaceType.MuseumArtGallery,
        label: "博物館・美術館",
        value: PlaceType.MuseumArtGallery,
        checked: false
    },
    {
        id: PlaceType.craft,
        label: "クラフト",
        value: PlaceType.craft,
        checked: false
    },
    {
        id: PlaceType.TraditionalCraft,
        label: "伝統工芸体験",
        value: PlaceType.TraditionalCraft,
        checked: false
    },
    {
        id: PlaceType.factory,
        label: "工場見学",
        value: PlaceType.factory,
        checked: false
    },
    {
        id: PlaceType.zoo,
        label: "動物園",
        value: PlaceType.zoo,
        checked: false
    },
    {
        id: PlaceType.aquarium,
        label: "水族館",
        value: PlaceType.aquarium,
        checked: false
    }
]


export const prefecturesData: prefectureState[] = [
    { 
        titleName: "北海道",
        childItems: [
            { id:"hokkaido", value: "北海道", checked: false },
        ] 
    },
    { 
        titleName: "東北",
        childItems: [
            { id:"aomori", value: "青森", checked: false },
            { id:"iwate", value: "岩手", checked: false },
            { id:"akita", value: "秋田", checked: false },
            { id:"miyagi", value: "宮城", checked: false },
            { id:"yamagata", value: "山形", checked: false },
            { id:"fukushima", value: "福島", checked: false },
        ] 
    },
    { 
        titleName: "関東", 
        childItems: [
            { id:"tochigi", value: "栃木", checked: false },
            { id:"gunma", value: "群馬", checked: false },
            { id:"ibaraki", value: "茨城", checked: false },
            { id:"saitama", value: "埼玉", checked: false },
            { id:"chiba", value: "千葉", checked: false },
            { id:"tokyo", value: "東京", checked: false },
            { id:"kanagawa", value: "神奈川", checked: false },
        ] 
    },
    { 
        titleName: "中部", 
        childItems: [
            { id:"niigata", value: "新潟", checked: false },
            { id:"fukui", value: "福井", checked: false },
            { id:"toyama", value: "富山", checked: false },
            { id:"ishikawa", value: "石川", checked: false },
            { id:"yamanashi", value: "山梨", checked: false },
            { id:"nagano", value: "長野", checked: false },
            { id:"gifu", value: "岐阜", checked: false },
            { id:"shizuoka", value: "静岡", checked: false },
            { id:"aichi", value: "愛知", checked: false },
        ] 
    },
    { 
        titleName: "近畿", 
        childItems: [
            { id:"shiga", value: "滋賀", checked: false },
            { id:"kyoto", value: "京都", checked: false },
            { id:"oosaka", value: "大阪", checked: false },
            { id:"nara", value: "奈良", checked: false },
            { id:"mie", value: "三重", checked: false },
            { id:"wakayama", value: "和歌山", checked: false },
            { id:"hyogo", value: "兵庫", checked: false },
        ] 
    },
    { 
        titleName: "中国", 
        childItems: [
            { id:"okayama", value: "岡山", checked: false },
            { id:"hiroshima", value: "広島", checked: false },
            { id:"tottori", value: "鳥取", checked: false },
            { id:"shimane", value: "島根", checked: false },
            { id:"yamaguchi", value: "山口", checked: false },
        ] 
    },
    { 
        titleName: "四国", 
        childItems: [
            { id:"kagawa", value: "香川", checked: false },
            { id:"kochi", value: "高知", checked: false },
            { id:"tokushima", value: "徳島", checked: false },
            { id:"ehime", value: "愛媛", checked: false },
        ] 
    },
    { 
        titleName: "九州", 
        childItems: [
            { id:"fukuoka", value: "福岡", checked: true },
            { id:"saga", value: "佐賀", checked: false },
            { id:"nagasaki", value: "長崎", checked: false },
            { id:"kumamoto", value: "熊本", checked: false },
            { id:"miyazaki", value: "宮崎", checked: false },
            { id:"ooita", value: "大分", checked: false },
            { id:"kagoshima", value: "鹿児島", checked: false },
            { id:"okinawa", value: "沖縄", checked: false },
        ] 
    },
]

export function getTodayDate() {
    const today = new Date();
    const year = String(today.getFullYear())
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    const date = `${year}-${month}-${day}`

    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const tomorrowYear = String(tomorrow.getFullYear())
    const tomorrowMonth = String(tomorrow.getMonth() + 1).padStart(2, '0')
    const tomorrowDay = String(tomorrow.getDate()).padStart(2, '0')
    const tomorrowDate = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`

    return {
        depaturesAt: date,
        destinationsAt: tomorrowDate
    }
}

export const initalActiveTime = [
    {
        key: "1日目",
        start: {
            hour: "08",
            minute: "00"
        },
        end: {
            hour: "20",
            minute: "00"
        }
    },
    {
        key: "2日目",
        start: {
            hour: "08",
            minute: "00"
        },
        end: {
            hour: "20",
            minute: "00"
        }
    }
]

export const HOURS = [...Array(24)].map((_, h) => String(h).padStart(2, "0"));
export const MINUTES = [...Array(59)].map((_, m) => String(m).padStart(2, "0"));

export const samplePlanDetails: PlanDetailsResponse = {
    "basicInfo": {
        "startDay": "2023-12-1",
        "endDay": "2023-12-1",
        "transportion": "CAR"
    },
    "plan": [
        {
            "Routes": [
                {
                    "category": "SPOT",
                    "spot": {
                        "id": "",
                        "spotName": "現在地",
                        "spotImgAlt": "現在地",
                        "spotImgSrc": "",
                        "location": {
                            "lat": 35.691212487274946,
                            "lng": 139.735503023065
                        },
                        "type": []
                    },
                    "type": "DEPARTURE",
                    "departure_at": "2023-12-01-08-00",
                    "arrived_at": ""
                },
                {
                    "category": "TRAFFIC",
                    "routes": [
                        {
                            "way": "CAR",
                            "departure": "2023-12-01-08-00",
                            "arrive": "2023-12-01-09-38"
                        }
                    ]
                },
                {
                    "category": "SPOT",
                    "spot": {
                        "id": "ChIJi3Fad5lmGWARvIujaJtmp7A",
                        "spotName": "山梨県立富士湧水の里水族館 森の中の水族館",
                        "spotImgAlt": "山梨県立富士湧水の里水族館 森の中の水族館",
                        "spotImgSrc": "",
                        "location": {
                            "lat": 35.4555484,
                            "lng": 138.8241271
                        },
                        "type": [
                            "aquarium",
                            "tourist_attraction",
                            "point_of_interest",
                            "establishment"
                        ]
                    },
                    "arrived_at": "2023-12-01-09-38",
                    "departure_at": "2023-12-01-11-38",
                    "type": "WAYPOINT"
                },
                {
                    "category": "TRAFFIC",
                    "routes": [
                        {
                            "way": "CAR",
                            "departure": "2023-12-01-11-38",
                            "arrive": "2023-12-01-11-38"
                        }
                    ]
                },
                {
                    "category": "SPOT",
                    "spot": {
                        "id": "ChIJk4ys8plmGWARH0jIPbciEzI",
                        "spotName": "レストランいねや",
                        "spotImgAlt": "レストランいねや",
                        "spotImgSrc": "",
                        "location": {
                            "lat": 35.4568231,
                            "lng": 138.8244478
                        },
                        "type": [
                            "restaurant",
                            "point_of_interest",
                            "food",
                            "establishment"
                        ]
                    },
                    "arrived_at": "2023-12-01-11-38",
                    "departure_at": "2023-12-01-12-38",
                    "type": "EATING"
                },
                {
                    "category": "TRAFFIC",
                    "routes": [
                        {
                            "way": "CAR",
                            "departure": "2023-12-01-12-38",
                            "arrive": "2023-12-01-13-01"
                        }
                    ]
                },
                {
                    "category": "SPOT",
                    "spot": {
                        "id": "ChIJh6p5nZRfGWAR5iMRBxxLlCY",
                        "spotName": "道の駅 かつやま レストラン",
                        "spotImgAlt": "道の駅 かつやま レストラン",
                        "spotImgSrc": "",
                        "location": {
                            "lat": 35.5044817,
                            "lng": 138.7344253
                        },
                        "type": [
                            "restaurant",
                            "point_of_interest",
                            "food",
                            "establishment"
                        ]
                    },
                    "arrived_at": "2023-12-01-13-01",
                    "departure_at": "2023-12-01-14-01",
                    "type": "EATING"
                },
                {
                    "category": "TRAFFIC",
                    "routes": [
                        {
                            "way": "CAR",
                            "departure": "2023-12-01-14-01",
                            "arrive": "2023-12-01-14-14"
                        }
                    ]
                },
                {
                    "category": "SPOT",
                    "spot": {
                        "id": "ChIJL7jIyupgGWARMDfArSEwykc",
                        "spotName": "富士急ハイランド",
                        "spotImgAlt": "富士急ハイランド",
                        "spotImgSrc": "",
                        "location": {
                            "lat": 35.4869467,
                            "lng": 138.7805511
                        },
                        "type": [
                            "amusement_park",
                            "tourist_attraction",
                            "point_of_interest",
                            "establishment"
                        ]
                    },
                    "arrived_at": "2023-12-01-14-14",
                    "departure_at": "2023-12-01-16-14",
                    "type": "WAYPOINT"
                },
                {
                    "category": "TRAFFIC",
                    "routes": [
                        {
                            "way": "CAR",
                            "departure": "2023-12-01-16-14",
                            "arrive": "2023-12-01-17-48"
                        }
                    ]
                },
                {
                    "category": "SPOT",
                    "spot": {
                        "id": "",
                        "spotName": "現在地",
                        "spotImgAlt": "現在地",
                        "spotImgSrc": "",
                        "location": {
                            "lat": 35.691212487274946,
                            "lng": 139.735503023065
                        },
                        "type": []
                    },
                    "type": "DESTINATION",
                    "departure_at": "",
                    "arrived_at": "2023-12-01-17-48"
                }
            ]
        }
    ]
}