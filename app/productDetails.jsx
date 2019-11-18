import React, {Component} from 'react';
import {Product }from '../models/product';
import ReviewForm from './reviewForm';
import {ProductReview} from '../models/productReview';
import ReviewList from './reviewList';
export class ProductDetails extends Component {
    
    
        products=[
            new Product (1,"Jif Peanut Butter, 40 ounce","7g of Protein per serving with no preservatives, artifical flavors or colors.",7.99,"http://johnlawrimore.com/smu/101.png",
        [] 
   )];
            /*rating=[
                new Rating(1,'1 star'),
                new Rating(2,'2 stars'),
                new Rating(3,'3 stars'),
                new Rating(4,'4 stars'),
                new Rating(5,'5 stars')
            ];*/
   state={
            review:[

                new ProductReview('Sarah',1,'1 star','Cool',new Date().toLocaleString()),
                //new ProductReview('Nathan',1,'Gross',new Date().toLocaleString())
                
        ]
        //add reviews here TODO
        
    }; 

   onReviewAdded(review){
        // new ProductReview(this.userName,this.rating,this.comment,'Nov 12');
         this.setState(prevState =>{
             prevState.review.push(review);
             return prevState;
     });
 
 }
    render(){
    return(
        <div>
        <div className='ProductDetails'>
        <nav className="navigation">
                <a className="Firsta">Tasty Snacks</a> / 
                <a>Account</a>
        </nav>
           
            <p className="describe">
                { 
                     this.products.map((products) => 
                     
                     <p key={products.id} ><img key={products.id} src={products.imageUrl}></img> 
                     <div class="container">
                         <div className="jumbotron jumbotron-fluid">
                     <h1 class="display-4">{products.name}</h1>
                     <h3><span className="badge badge-primary">{products.price}</span></h3>
                     <div className="productDescription">
                         {products.description}</div> 
                         </div>
                         </div>
                     </p> 
                     
                     )
                }
            </p>
            
        </div>
        <div className="reviewheader">
            <div className="row">
            <h3>Product Reviews </h3> <p>({this.state.review.length})</p>
            </div>
        <div  className='reviewListInner' >
        <ReviewList review={this.state.review}/>
        </div>  
          <div className="firstReview" >
              {this.state.review.length==0 ? "Be the first to add a review!":""}
            </div>
        </div>
        <ul>
        <ReviewForm onReviewAdded={x => this.onReviewAdded(x)}/>
        </ul>
        </div>
    );
    };
}export default ProductDetails;