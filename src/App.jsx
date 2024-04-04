import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Reserve1 from "./components/Reserve1";
import Reserve2 from "./components/Reserve2";
import Filters from "./components/Filters";
import Check from "./components/Check";
import Home from "./Home";
import RoomatesListing from "./components/RoomatesListing";
import Map from "./components/Map";
import MateDetails from "./components/mateDetails/MateDetails";
import Hero1 from "./components/Listing_steps/Hero1";
import AddDetails from "./components/Listing_steps/AddDetails";
import FlatDescription from "./components/Listing_steps/FlatDescription";
import LocationDetails from "./components/Listing_steps/LocationDetails";
import ConfirmAddress from "./components/Listing_steps/ConfirmAddress";
import Hero2 from "./components/Listing_steps/Hero2";

const router = createBrowserRouter([
  {
    path: "/carts",
    element: <Filters />,
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
    element: <RoomatesListing />,
  },
  {
    path: "/mateDetails",
    element: <MateDetails />,
  },

  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/addLocation",
    element: <LocationDetails />,
  },
  {
    path: "/addLocation/confirmAddress",
    element: <ConfirmAddress />,
  },

  {
    path: "/addImage",
    element: <Hero2 />,
  },
  {
    path: "/addDetails",
    element: <AddDetails />,
  },
  {
    path: "/flatDescription",
    element: <FlatDescription />,
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
