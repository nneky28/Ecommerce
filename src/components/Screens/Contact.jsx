import React from 'react';

const Contact = () => {
  return( 
  <div className='contact'>
  <div className="container mt-5 p-5">
      <h2>Why shop with us?....</h2>
    <ul className='listed'>
        <li>we make your move memorable</li>
        <li>Get fresh with us</li>
        <li>Your feet deserve better</li>
        <li>Quality shoes made easy</li>
        <li>Shoes make memories</li>
        <li>Your feet deserve better</li>
    </ul>
  </div>
<div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : +2348101321796</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              <button class=" btn btn-success">CANCEL</button>
              <button class=" btn btn-light ms-3">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  </div>
  )};

export default Contact;
