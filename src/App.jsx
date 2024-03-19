import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Reserve1 from "./components/Reserve1";
import Reserve2 from "./components/Reserve2";
import Filters from "./components/Filters";
import Check from "./components/Check";
import Home from "./Home";
import RoomatesListing from "./components/RoomatesListing";
import ReserveDate from "./components/ReserveDate";

const router = createBrowserRouter([
  {
    path: "/carts",
    element: <Filters />
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/reserve1",
    element: <Reserve1 />,
  },
  {
    path: "/reserve2",
    element: <Reserve2 />,
  },
  {
    path: "/checkout",
    element: <Check />,
  },
  {
    path: "/roomates",
    element: <RoomatesListing/>,
  },
  {
    path: "/reservedate",
    element: <ReserveDate/>,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
