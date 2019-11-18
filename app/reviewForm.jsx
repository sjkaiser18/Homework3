import React, {Component} from 'react';
import {Rating} from './rating';
import {ReviewList } from './reviewList';
import ProductReview from '../models/productReview';
export class ReviewForm extends React.Component{

   ratingIdOptions = [0,1,2,3,4]
    ratingOptions=['1 star','2 stars','3 stars','4 stars','5 stars']

    state={
      userName:'',
      ratingId:1,
      rating:'', 
      comment:'',
      date: console.log(Date())
    };

  

    onSubmit(){
        this.props.onReviewAdded(new ProductReview(this.state.userName,this.state.rating,this.state.ratingId,this.state.comment,this.state.date));
        this.setState({userName:'',rating:'',ratingId:'',comment:'',date:''});

    }
    

render(){
    return(
            <div className="container fluid">
            <div className="card">
            <h5 className="card-header bg-secondary text-light">Add Review</h5>
            <form>
            <div className="card-body">
            <div class="row">
                
                <div class="col-6">
        <div className="form-group" >
        
            <label htmlFor="userName">Your Name</label>
           <input type="text" id='userName' name="userName" className="form-control" value={this.state.userName} onChange ={e=> this.setState({userName : e.target.value})}/>
            </div>
        </div>

         <div className="col-2">
         <label htmlFor="ratingId">Rating</label>
           
            <select type="text" id='ratingId' name="ratingId" className="form-control" value={this.rating} onChange ={e=> this.setState({ratingOptions: e.target.value})}>
            <option value="0"></option>
            {
                this.ratingOptions.map(x=> 
                    <option key={x}>
                        {this.ratingOptions}    
                    </option>
                    )   
                    
            }
            </select>
            
            </div><span className=" col-3 stars" ><Rating value={this.state.ratingId} onChange={e=> this.setState({ratingId: e.target.value})} /></span>
            </div> 
        
        <div className="form-group">
            
            <label htmlFor="comment">Comment</label>
            <textarea id='comment' name="comment" className="form-control" value={this.state.comment} onChange ={e=> this.setState({comment : e.target.value})}/>
            
        </div>
    <button type="submit" className="btn btn-primary"
     onClick={() => this.onSubmit()}>
     Submit
    </button>
    </div>
        </form>
        
        </div>
     </div>   
        
        );
}
}export default ReviewForm;