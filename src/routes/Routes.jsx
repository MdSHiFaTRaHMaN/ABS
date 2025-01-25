import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../component/Login"
import TermsAndConditions from "../component/TermsAndConditions";

export const router = createBrowserRouter([
   
    {
      path: "/",
      element:<App />,
      children : [
        
      ]
    },
    {
        path: "/login",
        element : <Login />,
    },
    {
      path: "/term&condition",
      element: <TermsAndConditions />
    }
  ]);