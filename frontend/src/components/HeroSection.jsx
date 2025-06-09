// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
import {Link, NavLink ,Outlet} from "react-router-dom"
// import UploadData from "./ListItems/UploadData";
// import { NavLink,Outlet } from "react-router-dom";

const HeroSection = () => {
  return (

  
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Portal for Unified Defense:
        <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">
          Securing your Nation.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-black max-w-4xl" >
Explore our comprehensive solution for integrated defense. Effectively oversee weapon inventory and elevate border surveillance using cutting-edge image segmentation technology. 
Our platform guarantees precise monitoring of arms while utilizing sophisticated algorithms for border security, enhancing national safety with unmatched accuracy. 
Immerse yourself in the next generation of defense management through our solution, contributing to a more secure future for India.
      </p>
      <div className="flex justify-center my-10">
     
        <Link to="/inventory" className="bg-gradient-to-r from-orange-500 to--800 py-3 px-4 mx-3 rounded-md" >
        <b>INVENTORY</b>
      </Link>
        <NavLink to="/UploadDis" className="bg-gradient-to-r from-green-500 to--800 py-3 px-4 mx-3 rounded-md "> 
        <b> check  Suspicious Activity</b>
        </NavLink>

      </div>
      <div className="flex mt-10 justify-center">
        {/* <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

      </div>
      <main><Outlet/></main>
    </div>
  
  );
};

export default HeroSection;
