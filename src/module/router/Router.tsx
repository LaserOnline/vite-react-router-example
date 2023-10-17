import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../components/home/Home";
import Oops from "../../components/oops/Oops";
import Title from "../../components/title/Title";
import Title2 from "../../components/title-2/Title2";
import Api from "../../components/api/Api";

const router = createBrowserRouter ([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/title",
      element: <Title/>
    },
    {
      path: "/title2",
      element: <Title2/>
    },
    {
      path: "/get",
      element: <Api/>
    },
    {
      path: "*",
      element: <Oops/>
    }
]);
  
export default router;