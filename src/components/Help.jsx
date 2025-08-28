import React from 'react'
import "./Help.css"
import MenuTwo from './MenuTwo'
import Footer from './Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Help = () => {
  return (
    <div className='main_help'>
     <div className='bg-black h-[8rem] w-full help_menuTwo'> <MenuTwo/></div>

     <div className="help_contents">
            <div className="help_heading flex flex-col items-center
             justify-center    h-[20rem]"><p className='text-[60px] text-black help_p'>Hello, how can we help?</p>
            <p className='text-[20px] hept_pera'>Find answers and inspiration on all things MoviePlay.</p>
            </div>

            <div className='help_cntents_2'>
                <div className="help_search">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" color="gray" />
                    <input type="text" placeholder='Search movie, music, article etc...' />
                </div>

                <div className="help_buttons">
                    <button>Get started</button>
                    <button>Movies</button>
                    <button>Articles</button>
                    <button>Music</button>
                    <button>About us</button>
                    <button>Privacy & Policy</button>
                    <button>Terms & Condition</button>
                </div>

            </div>

            <div className="help_cntents_3">

                <div className="text text-black help_contents_3_1">
                    <button className='bt-1'>New</button>
                    <p className='text-[40px]'>MoviePlay</p>
                    <p className='text-[22px]'>Endless Entertainment, Zero Complications.</p>
                    <button className='bt-2'>Let's go</button>
                </div>

                <div className="video">
                    <video src="./video.mp4" width={500}
                    autoPlay loop className='shadow-amber-lg'
                    ></video>
                    </div>

            </div>

            <div className="help_cntents_4">
                <div className="heading text-[50px] text-black help_p">What's New at MoviePlay</div>
                <div className="contents-4">
                    <div className='hading_help'>
                        <h1>New Password Protection for Watchlists & Premium Content</h1>
                        <p>Keep your favorite movies and premium content safe! MoviePlay now lets you restrict access to personal watchlists or pre-release content for private viewing or sharing with friends. Perfect for internal previews or just keeping your movie plans private.</p>
                    </div>

                    <div>
                        <h1>Enhanced AI-Powered Recommendations</h1>
                        <p>MoviePlay’s AI now helps you discover movies faster and smarter. With updated AI features, you’ll get personalized movie suggestions based on your watch history, mood, and genre preferences. Finding your next favorite movie has never been easier!</p>
                    </div>

                    <div>
                        <h1>Hover to See Full Movie Details</h1>
                        <p>Sometimes movie titles or genres get cut off in lists or menus. Now, when you hover over a movie, full titles, descriptions, and cast details are displayed instantly—so you never miss important info.</p>
                    </div>

                    

                </div>
                <button className='bt-2 w-[180px]'>Watch now</button>  
            </div>

            <div className="help_cntents_5">
             <div className='head-5'>   <h1 className='help_p'>Popular Topics on MoviePlay</h1></div>

                <div className="btns-4">
                    <button>Latest Releases</button>
                    <button>Genres</button>
                    <button>Top Rated</button>
                    <button>Watchlists</button>
                    <button>Streaming Tips</button>
                    <button>Subscriptions & Billing</button>
                    <button>Frequently Asked Questions</button>
                    <button>MoviePlay Community</button>
                    <button>About us</button>
                </div>
            </div>

              <div className="help_cntents_6">
                <div className="heading-6 text-[50px] text-black help_p">Couldn't find what you needed?</div>
                <div className="contents-6">

                    <div className="box_container">
                    <div className='box text-white'>
                        <h1 className='text-white'>Community Discussions</h1>
                        <p className='text-white'>Join the MoviePlay community to share tips, reviews, and recommendations with fellow movie lovers.</p>
                    </div>

                    <div className='box'>
                        <h1 className='text-white'>Movie Guides & Tips</h1>
                        <p className='text-white'>Explore our guides on discovering new movies, building watchlists, and getting the best streaming experience.</p>
                    </div>

                    <div className='box'>
                        <h1 className='text-white'>Contact Support</h1>
                        <p className='text-white'>Our support team is ready to assist with any issues, from account questions to streaming problems.</p>
                    </div>

                    </div>

                    

                </div>
            
            </div>

     </div>

        <Footer/>
    </div>
  )
}

export default Help
