import React,{useEffect} from "react";
import "animate.css/animate.min.css";
import Aos from "aos";
import "aos/dist/aos.css"
import Heading from "../componants/Heading";



function Threediv() {
    useEffect(()=> {
        Aos.init({duration:1000});
    },[]);

  return (
    <>
        <div className="container-fluid flex h-[80vh] items-center justify-center ">
            <div className="h-[50%] w-[43%] flex flex-col justify-evenly">
            
            <Heading Header={{class:"text-gray-700 font-extrabold  text-5xl  w-[100%] ",h:"Free Lifetime Update"}}/>
            <Heading Header={{class:"text-blue-500 font-semmibold  tracking-wide  w-[100%] ",h:"We continue updating our products to ensure that they will run smoothly with the latest technology."}}/>
            <button type="button" class="btn text-white font-medium w-[40%] rounded-md text-sm px-8 py-3 text-center  mr-3 md:mr-0">Purchase Nuva Now</button>
            </div>
            <div className="h-[100%] w-[43%]  relative    ">
                <div data-aos="fade-down" className="threediv-card  absolute ml-[50px] mt-[140px] h-[30vh] w-[70%] rounded-xl"></div>              
                <div data-aos="flip-right" className="threediv-card threediv-card1 absolute ml-[20px] mt-[110px] h-[30vh] w-[70%] rounded-xl"></div>              
                <div data-aos="fade-up" className="threediv-card threediv-card2 absolute ml-[130px] mt-[190px] h-[30vh] w-[70%] rounded-xl"></div>              
            </div>
       </div>
      
    </>
    
  );
}

export default Threediv;


//data-aos-duration="3000"
  
  
