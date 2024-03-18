import Header from "../../components/Header/Header";
import { Grid } from "semantic-ui-react";

import tokenService from '../../utils/tokenService';
import RestaurantPage from "../RestaurantPage/RestaurantPage";
import ServicePage from "../ServicePage/ServicePage";
import OtherPage from "../OtherPage/OtherPage";
import "./FeedPage.css";





export default function FeedPage(){



   return (


   
    <h1>Click on the categories you wish to view more of!
<br />
<ul>
   <li> <a href="restaurants">Restaurants</a> 
   <br />
   <img src="https://media.istockphoto.com/id/1024128116/vector/japanese-on-the-go-ramen-noodles-soup-restaurant-stall-decorated-with-big-chashu-bowl-with.jpg?s=612x612&w=0&k=20&c=FRKPmFl-SmNF9rOCHfxkmCvauBDLenoVQOiYUBkbvWY=" 
   width={150}
   alt="" />
   </li>
   <li> <a href="services">Services</a></li>
   <img src="https://banner2.cleanpng.com/20180603/xug/kisspng-businessperson-business-to-business-service-small-5b142c0be84687.1917875015280486519514.jpg" 
    width={150}
   alt="" />
 
   <li> <a href="other">Others</a></li>
   <img src="https://t4.ftcdn.net/jpg/01/66/86/29/360_F_166862953_6Vy6pir6kahx4x6B5c9saPbwQ6yqNAnK.jpg" 
   width={150}
   alt="" />


</ul>
    
    
    </h1>



   
  )
}