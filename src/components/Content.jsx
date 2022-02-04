import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import Cart from "./Cart";
import data from './data';
import swal from 'sweetalert'


const Content = ({item}) => {
  const {id} = useParams()
  let singleData = data[id-1];

  console.log("content",id);
  console.log("singledata",singleData);

  //  console.log('item id',singleData.id)

  const [singleImage, setSingleImage] = useState();
  const changeImage = (regulator) => {
    setSingleImage(regulator);
   
  };
//   const[count, setCount] = useState(0)

//   const handleIncrement =()=>{
//       setCount(count +1);
//       singleData()
//   }

//   const handleDecrement =()=>{
//       if(count === 0){
//             setCount(0);
//       }else{
//         setCount(count -1);
//       }
// }
  
const {addItem, items} = useCart();

const handleAlert=()=>{

const checking = items.findIndex((item)=>{
  return item.id === singleData.id 
})

  if (checking >= 0 ){
    swal( "Item already added to cart")
  } else {
    addItem(singleData)
    swal( "Item added to cart")
  }

  // let localData = JSON.parse(localStorage.getItem('react-use-cart'))
//   if(localData.items.length !== 0){

//   localData.items.map((item)=>{
//     if(item.id !== singleData.id){
//       addItem(singleData);
//       alert('item added to cart')
//     }else{
//       alert('item already added')
      
//     }
//   })

// }else{
//   addItem(singleData);
//   alert('item added to cart')
// }

  
}

  return (
    <main>
      <div className="container-fluid ms-5 mb-5">
        <div className="row ms-4 me-5">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5">
            <div className="group ms-4 mb-3 ">
              {!singleImage ? (
                <img
                  src={`${singleData.pic1}`}
                  alt="image"
                  className="img-fluid singular"
                />
              ) : (
                <img
                  src={`${singleImage}`}
                  alt="image"
                  className="img-fluid singular"
                />
              )}
            </div>
            <div className="imgGroup ms-4 me-5 mb-5">
              <div className="row mb-3">
                <div className="col-lg-3 col-md-12 col-sm-12">
                  <img
                    onClick={() => changeImage(singleData.pic1)}
                    src={`${singleData.pic1}`}
                    alt=""
                    className="img-responsive product mb-3"
                  />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                  <img
                    onClick={() => changeImage(singleData.pic2)}
                    src={`${singleData.pic2}`}
                    alt=""
                    className="img-responsive products mb-3"
                  />
                </div>

                <div className="col-lg-3 col-md-12 col-sm-12">
                  <img
                    onClick={() => changeImage(singleData.pic3)}
                    src={`${singleData.pic3}`}
                    alt=""
                    className="img-responsive products mb-3"
                  />
                </div>

                <div className="col-lg-3 col-md-12 col-sm-12 ">
                  <img
                    onClick={() => changeImage(singleData.pic4)}
                    src={`${singleData.pic4}`}
                    className=" img-responsive products mb-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5">
            <div className="textbg mt-5">
              <h4 className="text-main">{singleData.title}</h4>
              <h1 className="text-sub">
                {singleData.text} <span>{singleData.text1} </span>
              </h1>
              <p className="textsub">{singleData.desc}
               {" "}
                <span>
                {singleData.desc1}
                </span>{" "}
                {singleData.desc2}
              </p>
            </div>

            <div className="row">
              <div className="col-lg-2 mb-2">
                <h4 className="discount">${singleData.price}.00</h4>
                <p className="price">${singleData.discount}.00</p>
              </div>

              <div className="col-lg-6 mb-2">
                <button className="btn btn-box">50%</button>
              </div>
            </div>

            <div className="row">
              {/* <div className="col-lg-3 col-md-12 col-sm-12 mb-2">
                <div class="btn-group btn-main btn-lg">
                  <button
                   type="button"
                    className="btn signs"
                    onClick={handleIncrement}
                    >
                    +
                  </button>
                  <button type="button" className="btn ">
                    {singleData.}
                  </button>
                  <button
                   type="button"
                    className="btn signs"
                    onClick={handleDecrement}
                    >
                    -
                  </button>
                </div>
              </div> */}
              <div className="col-lg-9 col-md-12 col-sm-12 mb-2">
                <button 
                 onClick={handleAlert}
                type="button" 
                className="btn btn-cart btn-lg">
                  <i className="fas fa-shopping-cart p-1" />
                  Add to Cart
                </button> 
              </div>

              <Cart/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
