import React,{useEffect} from "react";
import Heading from "../componants/Heading";
import img1 from "../imges/rtl.jpg"
import "animate.css/animate.min.css";
import Aos from "aos";
import "aos/dist/aos.css"
import img2 from "../imges/home2.jpg"
import img3 from "../imges/coming-soon.jpg"


function Team() {
    useEffect(()=> {
        Aos.init({duration:2000});
    },[]);

  return (
    <>
    
        <div  className=" h-[90vh] w-[100%] flex items-center justify-around flex-col ">
            <Heading Header={{class:"team-h font-extrabold  text-center text-5xl h-[18vh] w-[45vw] ",h:"02+ Stunning Homepage Variations"}}/>
            <div className="h-[43vh] w-[85%]  flex justify-around">
                <div data-aos="fade-up" className="xl:w-30%  teamcard h-[100%] w-[30%] cursor-pointer ">
                    <div className="team-card h-[35vh] w-[100%] rounded-xl ">
                        <img className="h-[100%] w-[100%]  rounded-xl" src={img1} alt="" />
                    </div>
                    <Heading Header={{class:"team-hh text-gray-700 hover:text-red-400 text-center font-semibold text-xl mt-2",h:"Home Demo - 1"}}/>
                </div>
                <div data-aos="fade-up" className="xl:w-30%  teamcard h-[100%]  w-[30%] cursor-pointer ">
                    <div className="team-card h-[35vh] w-[100%] rounded-xl">
                        <img className="h-[100%] w-[100%]  rounded-xl" src={img2} alt="" />
                    </div>
                    <Heading Header={{class:"team-hh text-gray-700 hover:text-red-400 text-center font-semibold text-xl mt-2",h:"Home Demo - 2"}}/>
                </div>
                <div data-aos="fade-up" className="xl:w-30%  teamcard h-[100%]  w-[30%] cursor-pointer ">
                    <div className="team-card h-[35vh] w-[100%] rounded-xl ">
                        <img className="h-[100%] w-[100%]  rounded-xl" src={img3} alt="" />
                    </div>
                    <Heading Header={{class:"team-hh text-gray-700 hover:text-red-400 text-center font-semibold text-xl mt-2",h:"+ More Home Demos"}}/>
                </div>

              
            </div>

        </div>
    </>
    
  );
}

export default Team;


//data-aos=""data-aos-duration="3000"