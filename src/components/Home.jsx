import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useState } from 'react/cjs/react.development';
import data from './data';
import ProductCard from './ProductCard';

const Home = ({item}) => {

    const [products, setProducts]= useState(data)
    
    const {id} = useParams(); 

 

  return(
   <div className='allBox'>
  
    <h2 className='text-center mt-5 p-3 mb-5'>All Items</h2>
        <div className="py-4 container">
            <div className="row justify-content-center">
           
              {
                  products.map((item,i)=>(
                    <ProductCard
                    {...item} key={i}
                    id={item.id}
                    item={item}
                    />
                  ))
              }
            

        </div>
    </div>
  </div>
  )};

export default Home;
