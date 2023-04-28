import React from "react";
import Heading from "../componants/Heading";
import img20 from  "../imges/gallery1.jpg"
import img21 from  "../imges/gallery2.jpg"
import img22 from  "../imges/gallery3.jpg"
import img23 from  "../imges/gallery4.jpg"
import img24 from  "../imges/gallery5.jpg"
import img25 from  "../imges/gallery6.jpg"
import img26 from  "../imges/gallery7.jpg"
import img27 from  "../imges/gallery8.jpg"
import img28 from  "../imges/gallery9.jpg"
import img29 from  "../imges/gallery10.jpg"
import img30 from  "../imges/gallery11.jpg"
import img31 from  "../imges/gallery12.jpg"
import img32 from  "../imges/gallery13.png"
import img33 from  "../imges/gallery14.jpg"
import img34 from  "../imges/gallery15.jpg"
import img35 from  "../imges/gallery16.jpg"
import img36 from  "../imges/gallery17.jpg"
import img37 from  "../imges/gallery18.jpg"



function Awesome() {
    return (
      <>
        <div className="Awesome-main h-[220vh] w-[100%]  flex items-center justify-around flex-col">
            <div className=" w-[100%] h-[20vh]  flex items-center justify-around flex-col">
                <Heading Header={{class:"team-h font-extrabold  text-center text-5xl  w-[100%] ",h:"MY GALLERY"}}/>
                <h1 className=" font-semibold text-center text-gray-700 text-lg w-[100%]">Built with Sass  <span className="spain"> .</span>  Friendly Support <span className="spain">.</span> Powerful Design</h1>
            </div>
            <div className="h-[170vh] w-[80%]">
              <ul class="flex-container wrap">
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img20} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img21} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img22} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img23} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img24} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img25} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img26} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img27} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img28} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img29} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img30} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img31} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img32} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img33} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img34} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img35} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img36} alt="" /></li>
                  <li class="flex-item"><img className="gallery-img h-[100%] w-[100%] rounded-xl" src={img37} alt="" /></li>
              </ul>
            </div>



        </div>


      </>
    );
  }
  
  export default Awesome;