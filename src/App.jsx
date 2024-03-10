import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Reserve1 from './components/Reserve1';
import Reserve2 from './components/Reserve2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/details" />
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
