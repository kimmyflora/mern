import Header from "../../components/Header/Header";
import { Grid } from "semantic-ui-react";

import tokenService from '../../utils/tokenService';
import { Route, Routes } from "react-router-dom";
import RestaurantPage from "../RestaurantPage"


export default function FeedPage(){



   return (


      <Routes>
         <Route path="/food" element={<Food/>} />

    
    <h1>Click on the categories you wish to view more of!
      
     
    </h1>


  </Routes>
   
  )
}