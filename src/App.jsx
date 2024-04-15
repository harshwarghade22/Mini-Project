import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Reserve1 from "./components/Reserve1";
import Reserve2 from "./components/Reserve2";
import Filters from "./components/Filters";
import Check from "./components/Check";
import Home from "./Home";
import RoomatesListing from "./components/mateDetails/RoomatesListing";
import Map from "./components/Map";
import MateDetails from "./components/mateDetails/MateDetails";
import AddDetails from "./components/Listing_steps/AddDetails";
import FlatDescription2 from "./components/Listing_steps/FlatDescription2";
import LocationDetails from "./components/Listing_steps/LocationDetails";
import ConfirmAddress from "./components/Listing_steps/ConfirmAddress";
import Hero2 from "./components/Listing_steps/Hero2";
import MainSearch from "./MainSearch";
import Page1 from "./components/OnboardingPages/Page1";
import Page2 from "./components/OnboardingPages/Page2";
import MyComponent from "./components/Gmap/GMap2";

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
    element: <FlatDescription2 />,
  },
  {
    path: "/search",
    element: <MainSearch />,
  },
  {
    path: "/login1",
    element: <Page1 />,
  },
  {
    path: "/login2",
    element: <Page2 />,
  },
  {
    path: "/gmap",
    element: <MyComponent />,
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
