import React from 'react'
import MenuTwo from './MenuTwo'
import "./Privacy.css"
import Footer from "./Footer"

const Privacy = () => {
  return (
    <div className='main_privacy'>
      
        
      <div className="privacy_hero">
        <MenuTwo/>
        <h1>MoviePlay</h1>
        <p className="pera">
          The information provided here is for MoviePlay customers and users who have questions about our terms, policies, intellectual property, and compliance.
        </p>
      </div>
      
      <div className="privacy_contents">
        <div className="privacy_cntents_buttons">
          <button><a href="#i">Privacy Policy</a></button>
          <button><a href="#info">Information We Collect</a></button>
          <button><a href="#use">How We Use Your Information</a></button>
          <button><a href="#share">Sharing Information</a></button>
          <button><a href="#cookies">Cookies</a></button>
          <button><a href="#scdecurity">Data Security</a></button>
          <button><a href="#choices">Your Choices</a></button>
          <button><a href="#children">Children’s Privacy</a></button>
        </div>

        <div className='privacy_text'>
          <div className="Privacy_Policy SmallSc" id='i'>
            <h6>Privacy Policy</h6>
            <p className="pera">
              At MoviePlay, your privacy is our top priority. We are committed to protecting the information you share with us and ensuring a safe and enjoyable experience while you stream, download, or explore your favorite movies and series. This Privacy Policy explains what information we collect, how we use it, and the choices you have to control your personal data when using our website or services. By accessing or using MoviePlay, you agree to the practices described in this Privacy Policy.
            </p>
          </div>

          <div className="Information_We_Collect SmallSc" id='info'>
            <h6>1. Information We Collect</h6>
            <p className="pera">
              When you use MoviePlay, we may collect certain information to provide you with the best possible experience. This includes personal details such as your name, email address, and account credentials when you sign up or interact with our services. We also gather non-personal information, like your device type, browser version, IP address, and usage patterns, which help us improve the performance and functionality of our platform. In addition, we may collect information about your movie preferences, search history, and interactions on the website to recommend films, personalize your experience, and ensure smooth navigation. If you choose to connect through social media or third-party accounts, we may receive limited information as permitted by your privacy settings on those platforms. All collected information is used responsibly and solely for enhancing your experience on MoviePlay, ensuring that you enjoy secure, personalized, and relevant entertainment content.
            </p>
          </div>

          <div className="How_We_Use_Your_Information SmallSc" id='use'>
            <h6>2. How We Use Your Information</h6>
                <p className='pera'>At MoviePlay, the information we collect is used to enhance your overall experience and deliver personalized services. We use your details to manage your account, provide customer support, and process any requests you make. Your browsing activity and preferences help us recommend movies and improve our content offerings to match your interests. Additionally, we use the data to maintain the security of our platform, detect fraudulent activity, and ensure smooth technical performance. Occasionally, we may send you updates, promotional messages, or important service notifications, but only in line with your chosen communication preferences.</p>
          </div>

          <div className="Sharing_Information SmallSc" id='share'>
            <h6>3. Sharing Information</h6>
            <p className="pera">
              We respect your privacy and do not sell or trade your personal information to third parties. We may share limited information with trusted third-party service providers who assist us in analytics, hosting, email delivery, or other technical functions. These providers are contractually obligated to maintain strict confidentiality and use your information solely to support our services.
            </p>
          </div>

          <div className="Cookies SmallSc" id='cookies '>
            <h6>4. Cookies</h6>
            <p className="pera">
              At MoviePlay, we use cookies and similar technologies to enhance your experience while browsing and streaming movies. Cookies are small text files stored on your device that allow our website to remember your preferences, keep you logged in, and provide a smooth, personalized experience. They help us understand how users interact with the website, enabling us to improve the layout, functionality, and overall performance. Cookies also allow us to remember your watch history, favorite movies, and viewing preferences so that we can offer recommendations tailored specifically to your tastes. While some cookies are essential for the website to operate correctly, such as enabling login and maintaining session information, others are used to analyze usage patterns and improve content delivery. MoviePlay may also use non-intrusive cookies to provide relevant promotional offers or announcements, though we do not sell your personal information to advertisers. You have control over cookies through your browser settings and can choose to disable them at any time. However, please note that disabling cookies may limit certain features, such as saved preferences, watchlists, or automatic login. By continuing to use MoviePlay, you consent to our use of cookies as described in this policy, ensuring a safe, secure, and highly enjoyable entertainment experience for all our users.
            </p>
          </div>

          <div className="Data_Security SmallSc" id='security'>
            <h6>5. Data Security</h6>
            <p className="pera">
              At MoviePlay, protecting your personal information is a top priority. We implement industry-standard security measures, including encryption, secure servers, and regular monitoring, to safeguard your data from unauthorized access, misuse, or disclosure. Our systems are designed to maintain the integrity and confidentiality of the information you provide while using our website and services. However, no method of online transmission or storage is completely secure. While we strive to protect your data to the highest standards, we cannot guarantee absolute security. Users are encouraged to use strong passwords and exercise caution when sharing personal information online.
            </p>
          </div>

          <div className="Your_Choices SmallSc" id='choices'>
            <h6>6. Your Choices</h6>
            <p className="pera">
              At MoviePlay, we believe you should have control over the personal information you share with us. You have the right to access, update, or delete the data associated with your account at any time. If you wish to modify your account information, manage your preferences, or remove specific details, you can do so through your account settings or by contacting our support team at support@movieplay.com. You can also choose to opt-out of receiving promotional emails, newsletters, or other marketing communications, while still enjoying the core features of our website. Additionally, you have the ability to manage cookies and similar technologies through your browser settings, which may affect how some features on MoviePlay operate. We encourage you to take an active role in controlling your data, ensuring that your experience on MoviePlay aligns with your privacy preferences and comfort level. By providing these options, we aim to create a transparent and user-friendly platform where you can enjoy your favorite movies and series while maintaining confidence in how your personal information is handled.
            </p>
          </div>

          <div className="ChildrenPrivacp SmallSc" id='children'>
            <h6>7. Children’s Privacy</h6>
            <p className="pera">
              At MoviePlay, we are committed to protecting the privacy and safety of children while they use our website and services. Our platform is primarily designed for viewers who are at least 13 years of age. We understand that children are a vulnerable group, and we take extra care to ensure that their personal information is handled responsibly, in accordance with applicable laws and regulations.
            </p>
            <p className="pera">
              We do not knowingly collect any personally identifiable information from children under the age of 13. This includes data such as names, email addresses, physical addresses, phone numbers, or any other information that could be used to identify a child. If a parent, guardian, or child believes that we have inadvertently collected such information, we encourage them to contact us immediately at support@movieplay.com so that we can review the information and delete it promptly.
            </p>
            <p className="pera">
              Parents and guardians are encouraged to actively monitor and guide their children’s use of our website. We recommend that children do not share personal information online without parental consent, including creating accounts, sharing contact information, or uploading content that could identify them. MoviePlay provides a range of content for general audiences, and we also make efforts to clearly label movies and series that may not be suitable for children under certain age categories. However, the responsibility for supervising children ultimately rests with their parents or guardians.
            </p>
            <p className="pera">
              To enhance safety, we may use technical measures such as age verification mechanisms and content filters. These tools are designed to limit access to content that is not appropriate for younger audiences. While these measures are helpful, no system can guarantee complete protection. Therefore, parental involvement remains the most effective way to ensure children’s online safety.
            </p>
            <p className="pera">
              We also do not market directly to children under 13, and we do not knowingly send targeted advertising to them. Our promotional communications, newsletters, or notifications are intended only for users who have provided valid consent and are above the minimum age requirement. By restricting marketing communications to appropriate age groups, we reduce the risk of exposing children to content or messages that may be unsuitable or harmful.
            </p>
            <p className="pera">
              MoviePlay recognizes that children may access the internet using shared or family devices. In such cases, parents or guardians should take necessary steps to restrict access to their own accounts, passwords, or personal information to prevent inadvertent exposure. We also encourage families to educate children about safe online practices, including avoiding sharing personal information with strangers and reporting suspicious or inappropriate content.
            </p>
            <p className="pera">
              Finally, we are committed to complying with all relevant legal frameworks regarding children’s privacy, including the Children’s Online Privacy Protection Act (COPPA) and similar international regulations. Our goal is to create a secure and enjoyable entertainment environment where users of all ages can safely explore movies and series without compromising their personal privacy.
            </p>
            <p className="pera">
              Parents or guardians with questions, concerns, or requests regarding their child’s information can contact our support team at support@movieplay.com, and we will respond promptly to ensure the protection of your child’s privacy rights.
            </p>
          </div>
        </div>
      </div>

      {/* <footer>
        <p className="pera">© 2025 @MoviePlay. All rights reserved.</p>
      </footer> */}

      <Footer/>
    </div>
  )
}

export default Privacy
