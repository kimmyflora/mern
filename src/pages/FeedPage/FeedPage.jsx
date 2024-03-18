import Header from "../../components/Header/Header";
import { Grid } from "semantic-ui-react";
import AddFormPost from "../AddPostForm/AddPostForm";

import tokenService from '../../utils/tokenService';

export default function FeedPage(){



   return (
    <h1>main page
       <AddFormPost/>  
     
    </h1>
   
  )
}