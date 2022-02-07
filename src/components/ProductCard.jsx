import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import data from "./data"
import swal from 'sweetalert'

const ProductCard = ({ pic1, title, price,item }) => {

    const {id} = useParams();

    const {addItem, items} = useCart();
   
    const handleAdd=(id)=>{
      const checking = items.findIndex((item)=>{
        return item.id === id 
      })
      
        if (checking >= 0 ){
          swal( "Item already added to cart")
        } else {
          swal( "Item added to cart")
          addItem(item)
        }

  }
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-5">
      <div className="card p-0 overflow-hidden h-100 single shadow">
        <div className="card-body">
        <Link to={`/product/${item.id}`}>
        <div className="imagebg">
        <img src={`${pic1}`} className="img-fluid imagebg " />
        </div>
        </Link>
        <p className='text-center mt-3 title'>{title}</p>
        <p className='text-center main'>${price}.00</p>
       <p className="d-flex iconic">
       <i 
       onClick={()=>handleAdd(item.id)}
       className="fas fa-shopping-cart p-2 mt-2 icon"/>
       <i
        className="fas fa-star
         mt-3 
         ms-5
         icon"/>

       <i className="fas
        fa-star
        mt-3 icon"
       
        />
       <i className="fas fa-star
        mt-3 
        icon"

       />
        <i className="fas fa-star
        mt-3 
        icon"

       />
        <i className="fas fa-star
        mt-3 
        icon"

       />
    
       <i className="fas fa-heart
        mt-3 
        ms-5
        icon"

       />
       </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
