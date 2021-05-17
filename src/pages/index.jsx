import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout";
import Seo from "../components/seo";

// Images
import Onebook from "../images/background.svg";
import Relation from "../images/relation.svg";
import Safety from "../images/safety.svg";
import Repair from "../images/repair.svg";
import Virtual from "../images/virtual.svg";
import Services from "../images/services-banner.svg"

// Service Icons
import Appliances from "../images/services/appliances.svg";
import Bin from "../images/services/trash.svg";
import Cleaning from "../images/services/cleaning.svg";
import Electrical from "../images/icons/electrical.svg";
import Landscape from "../images/services/landscape.svg";
import Pets from "../images/services/pets.svg";
import Washing from "../images/icons/washing.svg";
import Plumbing from "../images/icons/plumbing.svg";


const IndexPage = () => {
  const list = [
    { text: "Appliance Repair", icon: Appliances },
    { text: "Cleaning", icon: Cleaning },
    { text: "Electrical Services", icon: Electrical },
    { text: "Landscaping", icon: Landscape },
    { text: "Pet Care", icon: Pets },
    { text: "Plumbing", icon: Plumbing },
    { text: "Trash Services", icon: Bin },
    
  ];

  const shortCards = list.map((item) => (
    <div className="flex flex-col items-center px-2 py-4 bg-white shadow-xl md:px-0 md:py-0 rounded-2xl gap-y-0">
      <img src={item.icon} className="w-52 h-52 md:w-52 md:h-52" alt="" />
      <h3>{item.text}</h3>
    </div>
  ));
  return (
    <Layout>
      <Seo title="Home" />
      <div className="flex flex-col flex-col-reverse py-2 text-center md:flex-row py-16 lg:flex-row py-8 ">
        {/* Banner */}
        <div>
          
        <h1>Find The Best Service Pros Near You!</h1>
          <h3 className="mt-1 indigo">Search it. Book it. Get it done.</h3>
          <div className="flex flex-col text-center lg:text-left">
          <h2 className="indigo">Get Notified</h2>
          <h3 className="font-semibold">Share your contact details to find out when we launch!</h3>
        
          <a href="https://zc.vg/uvZSt" target="_blank" rel='noopener noreferrer'>
            <button className="px-10 py-4 mt-10 font-bold text-white w-full md:text-2xl rounded-2xl w-10" style={{ backgroundColor: "#2b32b2" }}>Sign Up Here</button>
          </a>
          
          {/* --- This section to be un-commented when email connections are completed. --- */}
          {/* <form action="" className="mt-10">
            <div className="grid grid-cols-2 gap-x-4">
              <input type="text" placeholder="First Name" className="p-4 border rounded-lg md:text-2xl" />
              <input type="text" placeholder="Last Name" className="p-4 border rounded-lg md:text-2xl" />
            </div>
            <div className="flex flex-wrap mt-6">
              <input type="text" placeholder="Email" className="w-full p-4 border rounded-lg md:text-2xl" />
            </div>
            <input type="submit" value="Submit" className="px-10 py-4 mt-4 font-bold text-white md:text-2xl rounded-2xl" style={{ backgroundColor: "#1488CC" }} />
          </form> */}
          {/* --- This section to be un-commented when email connections are completed. --- */}   
        
        </div>
        </div>
        <img src={Services} className="w-full mt-1" alt="" />
        
      </div>
      
<div className="grid my-4 md:grid-cols-2 lg:grid-cols-2 gap-x-10">  
      </div>
      {/*SERVICES */}
      <div className="flex flex-col px-6 py-8 pb-16 -mx-10 text-left alt-bg gap-y-4 lg:-mx-16 lg:px-16 md:px-10">
        <h2 className="white">Our Services</h2>
        <div className="grid grid-cols-1 mt-2 lg:grid-cols-4 md:grid-cols-2 xl:gap-x-10 gap-x-10 md:gap-y-10 gap-y-10">
          {shortCards}
        </div>
      </div>
      {/*BLOG POSTS */}
      <div className="flex flex-col pt-8 pb-8 mb-10 text-left gap-y-4">
        <h2 className="indigo">Learn More</h2>
        <h3>Follow OneBook blogs on Medium and engage with our community.</h3>
        <div className="grid mt-10 text-left lg:grid-cols-3 lg:gap-x-12 gap-y-10 lg:px-0 md:px-20">
          
          <a href="https://onebookservices.medium.com/is-our-reliance-on-screens-making-professional-relationships-too-impersonal-38ea444a784c" target='_blank' rel='noopener noreferrer'>
            <div className="flex flex-col rounded-lg shadow-lg">
              <img src={Relation} alt="cookout with worker" />
              <div className="p-5 font-bold">
                Tech affecting communication?
                <div className="font-normal indigo">
                  Is Our Reliance On Screens Making Professional Relationships Too Impersonal?
                </div>
              </div>
            </div>
          </a>
          
          <a href="https://onebookservices.medium.com/inviting-strangers-over-a8043e880829" target='_blank' rel='noopener noreferrer'>
            <div className="flex flex-col rounded-lg shadow-lg">
              <img src={Safety} alt="guy on computer" />
              <div className="p-5 font-bold">
                Inviting Strangers Over
                <div className="font-normal indigo">
                  Is it Safe to Have Service Professionals in Your Home?
                </div>
              </div>
            </div>
          </a>
          
          <a href="https://onebookservices.medium.com/make-your-new-years-resolutions-a-reality-with-a-job-in-repair-and-maintenance-13d40f7c1a9a" target='_blank' rel='noopener noreferrer'>
            <div className="flex flex-col rounded-lg shadow-lg">
              <img src={Repair} alt="painters working" />
              <div className="p-5 font-bold">
                Make Your New Year's Resolutions
                <div className="font-normal indigo">
                  A Reality With A Job In Repair And Maintenance
                </div>
              </div>
            </div>
          </a>

        </div>
      </div>
      
    </Layout>
  );
}

export default IndexPage
