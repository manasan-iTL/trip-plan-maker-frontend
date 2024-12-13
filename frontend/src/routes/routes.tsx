import { Outlet, createBrowserRouter } from "react-router-dom";
import { PlanPage, PurposePage, TopPage, SpotDetailPage, SearchSpotPage } from "../components/container";
import PurposeProvider from "../components/common/PurposeProvider";
import { getSpotDetail } from "./loader/spotDetail";

const router = createBrowserRouter([
    
    {
        path: "/",
        element: <PurposeProvider />,
        children: [
            {
                index: true,
                element: <TopPage />
            },
            {
                path: "purposes/",
                element: <PurposePage />
            }
        ]
    },
    {
        path: "/plan", 
        element: <Outlet />,
        children: [
            {
                index: true,
                element: <PlanPage />
            },
            // {
            //     path: "confirm",
            //     element: <PlanConfirmPage />
            // },
            {
                path: "spots/:spotId",
                element: <SpotDetailPage />,
                loader: getSpotDetail
            }
        ]   
    },
    {
        path: "/search",
        element: <SearchSpotPage />
    }
])

export default router