import * as React from "react"
import { Link } from "gatsby";

// Contact Icons
import Logo from "../images/logo-white.svg";
import Phone from "../images/icons/phone-alt.svg";
import Email from "../images/icons/mail-alt.svg";
import Location from "../images/icons/location-alt.svg";

// Social icons
import Facebook from "../images/social/facebook-alt.svg";
import Twitter from "../images/social/twitter.svg";
import Instagram from "../images/social/instagram.svg";
import Vector from "../images/social/Vector.svg";


const footer = () => (
  <footer className="flex flex-col px-16 py-10 alt-bg md:flex-row md:flex-wrap md:gap-x-12 md:gap-y-0 gap-y-6 md:pl-52">

    {/* logo 
    <div className="items-center flex-1 hidden lg:flex">
      <img src={Logo} alt="" />
    </div>*/}

    {/* who we are */}
    <div className="flex flex-col flex-1 gap-y-2">
      <div className="font-bold white">
        <h3>Who we are</h3>
      </div>
      <div className="flex flex-col gap-y-4 white">
        {
          [
            ['Services', '/'],
            ['Community', '/'],
            ['About us', '/'],
            ['Careers', '/'],
            ['FAQs', '/'],
            ['Sign up', '/'],
            ['Sign up as a Pro', '/'],
          ].map(([caption, path]) => {
            return <Link to={path} className="font-semibold"> {caption} </Link>
          })
        }
      </div>
    </div>

    {/* contact us */}
    <div className="flex flex-col flex-1 gap-y-2">
      <div className="font-bold white">
        <h3>Contact Us</h3>
      </div>
      <div className="flex flex-col gap-y-4 white">
        
        <a href="tel:+3366632665">
          <div className="flex items-center gap-x-3">
            <img src={Phone} className="w-6 h-6 white" alt="phone icon" />
            <div className="font-medium">
              336.ONEBOOK (336.663.2665)
            </div>
          </div>
        </a>
        
        <a href="mailto:hello@onebook.ai">
          <div className="flex items-center gap-x-3">
            <img src={Email} className="w-7 h-7" alt="email icon" />
            <div className="font-semibold">
              hello@onebook.ai
            </div>
          </div>
        </a>
        
        <div className="flex items-center gap-x-3">
          <img src={Location} className="w-7 h-7" alt="location icon" />
          <div className="font-semibold">
            Denver CO, USA
          </div>
        </div>
      </div>
    </div>

    {/* follow us */}
    <div className="flex flex-col flex-1 gap-y-2">
      <div className="font-bold white">
        <h3>Follow Us</h3>
      </div>
      <div className="flex flex-row gap-x-2">
        <a href="https://www.facebook.com/onebookservices" target='_blank' rel='noopener noreferrer'>
          <img src={Facebook} className="w-8 h-8" alt="" />
        </a>
        <a href="https://twitter.com/OneBookServices" target='_blank' rel='noopener noreferrer'>
          <img src={Twitter} className="w-8 h-8" alt="" />
        </a>
        <a href="https://www.instagram.com/onebook.ai" target='_blank' rel='noopener noreferrer'>
          <img src={Instagram} className="w-8 h-8" alt="" />
        </a>
        <a href="https://onebookservices.medium.com" target='_blank' rel='noopener noreferrer'>
          <img src={Vector} className="w-8 h-8 p-1 bg-black rounded-md" alt="" />
        </a>
      </div>
    </div>

    {/* legal */}
    <div className="flex flex-col flex-1 gap-y-2">
      <div className="font-bold white"> <h3>Legal</h3> </div>
      <div className="flex flex-col gap-y-4 white">
        {
          [
            ['Terms of use', '/legal/terms'],
            ['Privacy policy', '/legal/privacy'],
          ].map(([caption, path]) => {
            return <Link to={path} className="font-semibold"> {caption} </Link>
          })
        }
      </div>
    </div>
  </footer>
);

export default footer;