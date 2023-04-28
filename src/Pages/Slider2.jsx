import Heading from "../componants/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
    <div  className="h-[90vh] w-[100%] bg-gray-600 flex items-center justify-evenly flex-col ">
            <Heading Header={{class:"team-h font-extrabold  text-center text-5xl  w-[45vw] ",h:"OUR FOOTBALL TRAINERS"}}/>
            <div className="h-[45vh] w-[40%]  flex justify-around">
            <div data-aos="fade-up" className="teamcard1 h-[100%]  w-[100%] cursor-pointer ">
              <div className="team-card1 h-[100%] w-[100%] rounded-xl ">
              
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
                <SwiperSlide className="slider01">
                    <div className="h-[20vh] w-[150px]  mt-[80px] ml-[270px]">
                      <Heading Header={{class:" font-semibold text-cyan-400  text-center text-xl  w-[100%] ",h:"Pep Guardiola "}}/>
                      <Heading Header={{class:"text-cyan-400  text-center text-lg  w-[100%]" ,h:"Spanish professional football manager"}}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider01 slider02">
                    <div className="h-[20vh] w-[150px]  mt-[70px] ml-[290px]">
                      <Heading Header={{class:" font-semibold text-cyan-400  text-center text-xl  w-[100%] ",h:"Carlo Ancelotti"}}/>
                      <Heading Header={{class:"text-cyan-400  text-center text-lg  w-[100%]" ,h:"Italian is professional football manager"}}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slider01 slider03">
                    <div className="h-[20vh] w-[150px]  mt-[80px] ml-[290px]">
                      <Heading Header={{class:" font-semibold text-cyan-400  text-center text-xl  w-[100%] ",h:"Jürgen Klopp"}}/>
                      <Heading Header={{class:"text-cyan-400  text-center text-lg  w-[100%]" ,h:"German professional football manager"}}/>
                    </div>
                </SwiperSlide>
            </Swiper>

                
                 
                    
                    </div>
                </div>


      </div>
    </div>
    </>
  );
}








