import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { PlanContextProvider } from './hooks/context/planContext';
import { SearchSpotContextProvider } from './hooks/context/searchSpotContext';
import { V2PlanContextProvider } from './hooks/context/v2PlanContext';

function App() {
  return (
    <PlanContextProvider>
      <V2PlanContextProvider>
      <SearchSpotContextProvider>
        <RouterProvider router={router}/>
      </SearchSpotContextProvider>
      </V2PlanContextProvider>
    </PlanContextProvider>
  );
}

export default App;
