import { useRoutes } from "react-router-dom";

import {
  Feedback,
  Dashboard,
  Faq,
  SharedLayout,
  Task,
  Notification,
  CoursePerformance
} from "../Pages/index";


import Login from "../Pages/auth/Login";
import Editprofile from "../Pages/Editprofile";
import Help from "../Pages/Help";
import Certificate from "../Pages/Certificate";
import Lesson1 from "../Pages/Lessons/Lesson1"
import Lesson2 from "../Pages/Lessons/Lesson2"
import Colleges from "../Pages/Colleges";
import Course from "../Pages/Course";
import Student from "../Pages/Students"
import Studentsedit from "../Pages/Studentsedit";
import Newcourse from "../Pages/Newcourse";



export default function Routes() {
  let element = useRoutes([
    {
      children: [
        {
          element: <SharedLayout />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
            },

            {
              path: "/courseperformance",
              element: <CoursePerformance/>,
            },
           
            {
              path: "/course",
              element: <Course/>,
            },
            {
              path: "/faq",
              element: <Faq />,
            },
            {
              path: "/feedback",
              element: <Feedback/>,
            },
            {
              path: "/task",
              element: <Task/>,
            },
            {
                path: "/Help",
                element: <Help/>,
              },
              {
                path: "/Student",
                element: <Student/>,
              },
              {
                path: "/Studentsedit",
                element: <Studentsedit/>,
              },
              {
                path: "/Editprofile",
                element: <Editprofile/>,
              },
              {
                path: "/Certificate",
                element: <Certificate/>,
              },
              {
                path: "/Lesson1",
                element: <Lesson1/>,
              },
              {
                path: "/Lesson2",
                element: <Lesson2/>,
              },
              {
                path: "/Notification",
                element: <Notification/>,
              },
              {
                path: "/College",
                element: <Colleges/>,
              },
              {
                path: "/Newcourse",
                element: <Newcourse/>
              },
              {
                path: "/Colleges",
                element: <Colleges/>
              },
            ],
        },
      ],
    },

    {
      children: [
        {
          index: "/",
          element: <Login />,
        },
      ],
    },
  ]);

  return element;
}
