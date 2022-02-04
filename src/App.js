import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {CartProvider} from 'react-use-cart'
import Home from "./components/Home";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from './components/Footer';
import About from './components/Screens/About';
import Contact from './components/Screens/Contact';
import Collection from './components/Screens/Collection';
import Men from './components/Screens/Men';
import Women from './components/Screens/Women';


function App() {
  return (
    
  <BrowserRouter>
  <div className='container-flu'>
  <CartProvider>
   <Nav/>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="//:id" element={<Home/>}/>

       <Route path="/about" element={<About/>}/>
       

       <Route path="/men" element={<Men/>}/>
      
       <Route path="/women" element={<Women/>}/>
      
       <Route path="/contact" element={<Contact/>}/>

       <Route path="/collection/:id" element={<Collection/>}/>
       <Route path="/collection" element={<Collection/>}/>

       <Route path="/product/:id" element={ <Content/>}/> 
       <Route path="/product" element={ <Content/>}/> 
    </Routes>
    <Footer/>
    </CartProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
