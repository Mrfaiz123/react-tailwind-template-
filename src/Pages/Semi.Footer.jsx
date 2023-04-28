import Heading from "../componants/Heading";
import img30 from "../imges/alternate-versions.png"
import img31 from "../imges/html.png"
import "animate.css/animate.min.css";
import Aos from "aos";
import "aos/dist/aos.css"
import React,{useEffect} from "react";


function SemiFooter() {

  useEffect(()=> {
    Aos.init({duration:2000});
},[]);

    return (
      <>
        <div className="h-[100vh] w-[100%] flex items-center justify-around flex-col ">
          <Heading Header={{class:"team-h font-extrabold  text-center text-5xl  w-[100%] ",h:"Grab Alternate Versions!"}}/>
          <div className="h-[65vh] w-[80%] flex">
            <div className="h-[100%] w-[50%] ">
              <img className="h-[100%] w-[100%]" src={img30} alt="" />
            </div>
            <div className="h-[100%] w-[50%] flex items-center justify-center">
              <div data-aos="flip-right" className="semifoter-card h-[30vh] w-[40%] p-4 flex items-center cursor-pointer justify-evenly bg-white flex-col">
                <img className="h-[50%]  w-[50%]" src={img31} alt="" />
                <Heading Header={{class:"semi-extrabold  text-center text-xl  w-[100%] ",h:"HTML Version"}}/>
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }
  
  export default SemiFooter;