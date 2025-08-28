import React from 'react'
import MenuTwo from './MenuTwo'
import Footer from './Footer'
import "./TermsCondition.css"
const TermsCondition = () => {
  return (
    <div className=' main_termsCond '>
   <div className="menu_vala">    <MenuTwo/> </div>
     <div className='pl-[2rem] terms pb-[5rem] pt-[7rem]'>
       <p className='text-[60px] terms_hadding'>MoviePlay Terms of Service</p>
       <div className="condition_text w-[60%]  ">
        <p className='text-[30px] pt-[30px] hadding'>1. Terms and Conditions</p>
        <p className="pera clackColor term_pera">Welcome to MoviePlay. By accessing and using our website, you agree to comply with and be bound by these Terms and Conditions. These terms govern your use of our services and form a legally binding agreement between you and MoviePlay. You must be at least 13 years old to use the website, and by doing so, you confirm that you meet this age requirement.</p>

        <p className="pera clackColor term_pera">MoviePlay provides streaming and informational content for entertainment purposes. You agree to use the website responsibly and not engage in any activity that could harm the website, its services, or other users. All content on MoviePlay, including movies, images, graphics, and text, is protected by copyright and intellectual property laws. You may not reproduce, distribute, or modify our content without prior permission.</p>

        <p className="pera clackColor term_pera">We reserve the right to modify or terminate the website or services at any time without prior notice. MoviePlay is not liable for any interruptions, inaccuracies, or damages arising from the use of the website. Continued use constitutes acceptance of these Terms.</p>

        <p className='text-[30px] pt-[30px] hadding'>2. Privacy Policy</p>
        <p className="pera clackColor term_pera">At MoviePlay, your privacy is important to us. We are committed to protecting any personal information you provide when using our website. Information collected may include your name, email address, device details, and browsing activity. This data is used to enhance your experience, provide personalized content, and improve our services.</p>

        <p className="pera clackColor term_pera">We do not share, sell, or rent your personal information to third parties without your consent, except where required by law. Cookies and similar technologies may be used to track user activity and improve website performance. Users have the right to access, update, or request deletion of their personal information.</p>

        <p className="pera clackColor term_pera">MoviePlay takes all reasonable measures to protect your data from unauthorized access, alteration, or misuse. By using our website, you consent to our privacy practices as described. We may update this policy from time to time, and continued use of the website constitutes acceptance of these updates.</p>

        <p className='text-[30px] pt-[30px] hadding' >3. About Us</p>

        <p className="pera clackColor term_pera">MoviePlay is a premier online platform dedicated to bringing the best of movies and entertainment directly to your device. Our mission is to provide an enjoyable, seamless, and high-quality streaming experience to movie lovers everywhere. We feature a wide range of films, from the latest blockbusters to timeless classics across genres like action, romance, comedy, thriller, and more.</p>

        <p className="pera clackColor term_pera">We believe in creating a user-friendly environment where everyone can easily find and enjoy their favorite content. MoviePlay is constantly updated with new releases, trending films, and curated recommendations to ensure our users never miss out on the latest entertainment. Our goal is to make movie-watching a simple, fun, and immersive experience, whether you’re at home or on the go.</p>

        <p className='text-[30px] pt-[30px] hadding'>4. How We Use Your Information</p>
        <p className="pera clackColor term_pera">MoviePlay collects and uses your information to provide and enhance our services. This includes using your email address to send updates, recommendations, or notifications about new content. Device information and browsing data help us understand how users interact with the website, enabling us to improve performance and customize user experiences.</p>

        <p className="pera clackColor term_pera">We respect your privacy and ensure that your personal information is never shared with unauthorized third parties. Data is stored securely and used only for operational purposes, analytics, and enhancing the website’s functionality. You can request access to, update, or delete your information at any time.</p>

        <p className="pera clackColor term_pera">Our commitment is to use your data responsibly to provide a smooth, personalized, and safe movie-watching experience while protecting your privacy and complying with applicable laws.</p>

       </div>
     </div>
      <Footer/>
    </div>
  )
}

export default TermsCondition
