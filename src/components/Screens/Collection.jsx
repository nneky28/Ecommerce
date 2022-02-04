import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';
import ProductCard from '../ProductCard';

const Collection = ({item}) => {

    const {id} = useParams();
    console.log("collection",id);
    
   let collection = data;
   let newA = collection.filter((item)=>(item.type==='men'))
//    console.log("dont stress me", newA.id);

   let newB = collection.filter((item)=>(item.type==="women"))
//    console.log("women", newB);


//   console.log("collection", item.id);

  return(
   <div className='container'>
    
       <h1 className='cat p-2 mt-5'>Categories</h1>
       <h4 className='men ms-5'>For Men</h4>
       <div className="row">
        {
            newA.map((item,i)=>(
                <ProductCard
                   key={i}
                   id={item.id}
                    {...item}
                    item={item}
                />
            ))
        }
  </div>
  <h4 className='men ms-5'>For Women</h4>
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
  )};

export default Collection;
