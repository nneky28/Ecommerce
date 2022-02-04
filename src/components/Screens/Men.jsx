import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';
import data from "../data";

const Men = ({item}) => {
    const {id} = useParams();
    console.log("men",id);

    let collection = data;
    let newB = collection.filter((item)=>(item.type==="men"))
    // console.log("women", newB);
  return( 
  <>
    <div className="container mt-4 p-4">
        <h4 className='p-3 text-center'>
        HOW TO GET RID OF THAT ANNOYING SNEAKER STAIN
        </h4>
        <p className='text-center'>   
        We have all had to give up our sneakers at some crucial and daring point<span>
         because of the infamous yellow sole stain that just won’t go away. </span>
        Well no more, we have cura...
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

export default Men;
