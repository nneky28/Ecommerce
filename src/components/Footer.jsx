import React from 'react';

const Footer = () => {
    const today = new Date();

  return( 
  <>
  {/* <h5 className='text-center'id='footer-sub'>When the shoes get lighter, the moves get tighter......</h5> */}
      <div className="footer-box">
        <div className="footer-bg">
            <h4 className='text-center p-5' id='logo'>Sneakers</h4>
            <h5 className='text-center'> hello@sneakers.com.ng</h5>
            <h5 className='text-center'>Ifako Agege 101232, Lagos</h5>
            <h5 className='text-center'> +234-813-690-2267 | +234-703-067-4035</h5>
            <hr className='navline' />
        <div className="container">
        <div className="row ms-4 me-4">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="date">
           <p className=''>&copy; copyright {today.getFullYear()} all rights reserved</p> 
           </div>
            </div>
            <div className="offset-lg-4 col-lg-2 col-md-12 col-sm-12 col-xs-12">
                <div className="socials">
                    <p>
                    <i className="fab fa-twitter" id='public'/>
                    <i className="fab fa-instagram ms-2" id='public' />
                    <i className="fab fa-facebook ms-2" id='public' />
                    </p>
                </div>
            </div>
        </div>
        </div>
      </div>
      </div>
  </>
  )};

export default Footer;
