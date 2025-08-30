import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ClubMembers from "../pages/ClubMembers/ClubMembers";
import BlogSection from "../pages/Archive/BlogSection/BlogSection";
import EventPage from "../pages/EventPage/EventPage/EventPage";
import AboutPage from "../pages/AboutPage/AboutPage";

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
          path: 'events',
          element: <EventPage></EventPage>
        },
        {
          path: 'portal',
          element: <BlogSection></BlogSection>
        },
        {
          path: 'people',
          element: <ClubMembers></ClubMembers>
        },
        {
          path: 'about',
          element: <AboutPage></AboutPage>
        }
    ]
  },
]);
