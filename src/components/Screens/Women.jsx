import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';
import data from "../data";

const Women = ({item}) => {
    const {id} = useParams();

    let collection = data;
    let newB = collection.filter((item)=>(item.type==="women"))
    console.log("women", newB);
  return( 
  <>
    <div className="container mt-5 p-4">
       <h4 className='p-3 text-center'>
       THE MOST GORGEOUS DRESS DESERVES THE MOST GORGEOUS SHOES.
       </h4>
       <p className='text-center'>
        Whatever image you have of your special day and yourself,<span>
        it isn’t complete without that perfect pair that makes</span>
         walking down the aisle(and dancing)a smooth rid...
        </p>

        <div className="row">
{
    newB.map((item,i)=>(
        <ProductCard
        key={i}
        id={item.id}
         {...item}
         item={item}
        />
    ))
}
  </div>
    </div>
  </>
  )};

export default Women;
