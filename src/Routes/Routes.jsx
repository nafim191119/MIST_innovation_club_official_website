import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Workshop from "../pages/EventPage/Workshop/Workshop";
import ImageGallery from "../pages/Archive/ImageGallery/ImageGallery";
import ClubMembers from "../pages/ClubMembers/ClubMembers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'events/workshop',
          element: <Workshop></Workshop>
        },
        {
          path: 'archive/gallery',
          element: <ImageGallery></ImageGallery>
        },
        {
          path: 'clubMembers',
          element: <ClubMembers></ClubMembers>
        }
    ]
  },
]);
