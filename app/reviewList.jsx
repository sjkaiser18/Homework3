import React from 'react';
import {Rating} from './rating';

export const ReviewList= props => {
   if(ReviewList==[]){
       return(<div>Be the first to add a review!</div>);
   }
   else{
   return(
   
    //{
    props.review.map((x,i)=>
        
        <li key={i} className="list-group-item">
            <div className="card bg-light"> 
            <div className="card-header"> <Rating value={x.ratingId}/> {x.rating}</div>
          <div className="card-body">
              <div className="row">
              <div className="col-8"> {x.userName}</div >
              <div className="col-4">{x.date}</div >
              </div>
            <div className="col-12">"{x.comment}"</div > 
              
           </div>
           </div>
          </li>
          
          
        
    ) 
   
    //} 

)
   }
};
 export default ReviewList;