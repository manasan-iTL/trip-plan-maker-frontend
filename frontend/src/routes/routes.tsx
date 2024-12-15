import { Outlet, ScrollRestoration, createBrowserRouter } from "react-router-dom";
import { PlanPage, PurposePage, TopPage, SpotDetailPage, SearchSpotPage } from "../components/container";
import { getSpotDetail } from "./loader/spotDetail";

const Layout = () => {
    return (
      <div>
        {/* ... */}
        <ScrollRestoration />
        <Outlet />
      </div>
    );
  };


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <TopPage />
            },
            {
                path: "/search",
                element: <SearchSpotPage />
            },
            {
                path: "/plan", 
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <PlanPage />
                    },
                    {
                        path: "spots/:spotId",
                        element: <SpotDetailPage />,
                        loader: getSpotDetail
                    }
                ]   
            },
        ]
    }
])

export default router