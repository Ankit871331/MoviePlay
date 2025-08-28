import React from 'react'
import { Link } from "react-router-dom";
import Privacy from "./Privacy";  // make sure path is correct
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <div className='footer_main'>

    <div className="div_1_style">
     <div className="div_1">
        <div className="list_1">
            <ul>
<Link to="/privacy">
  <button className="border_buttom">Privacy Policy</button>
</Link>
               <Link to= "/TermsCondition"> <button className='border_buttom'>Terms & Conditions</button></Link>

               <Link to="/Help"> <button className='border_buttom'>Help & Support</button></Link>
            </ul>
        </div>

        <div className="list_2_3_4">
            <div className="list_2">
                <ul>
                    <button className='border_buttom'><a href="#moviecard"> Download </a></button>
                    <button className='border'><a href="#moviecard">Movie</a> </button>
                   <button className='border'><a href="#moviecard">Series</a></button>
                   <button className='border'> <a href="#moviecard">Animation</a></button>
                    <button className='border'><a href="#moviecard">Search</a></button>
                    <button className='border'><a href="#moviecard">Categories</a></button>
                </ul>
            </div>

            <div className="list_2">
                <ul>
                    <li className='border_buttom'><button> MoviePlay</button></li>
                    <button className='border'><a href="#home"> Home </a> </button>
                    <button className='border'><a href="https://kaleidoscopic-malasada-04f589.netlify.app/">About Us</a></button>
                    <button className='border'>Contact Us</button>
                    <button className='border'>Work with Us </button>
                    <button className='border'>FAQ </button>
                </ul>
            </div>

          
        </div>



     </div>
     <div className="style_left"></div>
     </div>

     <div className="div_2_style">
        <div className="style_right">
            <p>Movie </p>
            <img src="/icon.png" alt="icon" />
            
        </div>
        <div className="div_2 text-[17px]">
            <p>MoviePlay has been active since 2025, bringing movie lovers a seamless way to explore and enjoy entertainment. On this platform, you can watch or stream movies, TV series, and animations of your choice online. We also provide subtitles and dubbing options to make your viewing experience even better.</p>

            <div className="div_2_contents">

<a href="https://kaleidoscopic-malasada-04f589.netlify.app/"> <FontAwesomeIcon className='my_icon' icon={faFacebook} style={{ fontSize: '40px', color: '#c0c0c0' }} /> </a>

<a href="https://www.instagram.com/ankit.orig/"><FontAwesomeIcon className='my_icon' icon={faInstagram} style={{ fontSize: '40px', color: '#c0c0c0' }} /></a>

<FontAwesomeIcon className='my_icon' icon={faTwitter} style={{ fontSize: '40px', color: '#c0c0c0' }} />

     
            </div>
        </div>
     </div>
    </div>
  )
}

export default Footer
