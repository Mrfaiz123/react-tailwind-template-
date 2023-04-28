import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
    <div className="first-slider">
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
          <SwiperSlide className="slider">
              <div className="h-[27vh] w-[42vw] ml-[650px] mt-[270px]">
                  <div className="bg-gray-500 ml-[20px] flex justify-center items-center h-[12vh] w-[40vw]">
                      <h1 className="text-5xl font-semibold text-white">LIFE IS <span> ABOUT TIMING</span></h1>
                  </div>
                  <p className="text-2xl text-white ml-[139px] mt-3">Just play. <span> Have fun.</span> Enjoy the game</p>
                  <div className="slider-mid w-[200px] mt-3 flex justify-center items-center ml-[315px]">
                      <div className="text-white text-center cursor-pointer text-lg bg-gray-500 w-[200px]">READ MORE <span> ❯ </span></div>
                </div>
              </div>
          </SwiperSlide>
        

        <SwiperSlide className="slider slider1">
              <div className="h-[27vh] w-[42vw] ml-[650px] mt-[270px]">
                  <div className="bg-gray-500 ml-[20px] flex justify-center items-center h-[12vh] w-[40vw]">
                      <h1 className="text-5xl font-semibold text-white">LIFE IS <span> ABOUT TIMING</span></h1>
                  </div>
                  <p className="text-2xl text-white ml-[139px] mt-3">Just play. <span> Have fun.</span> Enjoy the game</p>
                  <div className="slider-mid w-[200px] mt-3 flex justify-center items-center ml-[315px]">
                      <div className="text-white text-center cursor-pointer text-lg bg-gray-500 w-[200px]">READ MORE <span> ❯ </span></div>
                </div>
              </div>
        </SwiperSlide>
        <SwiperSlide className="slider slider2">
              <div className="h-[27vh] w-[42vw] ml-[650px] mt-[270px]">
                  <div className="bg-gray-500 ml-[20px] flex justify-center items-center h-[12vh] w-[40vw]">
                      <h1 className="text-5xl font-semibold text-white">LIFE IS <span> ABOUT TIMING</span></h1>
                  </div>
                  <p className="text-2xl text-white ml-[139px] mt-3">Just play. <span> Have fun.</span> Enjoy the game</p>
                  <div className="slider-mid w-[200px] mt-3 flex justify-center items-center ml-[315px]">
                      <div className="text-white text-center cursor-pointer text-lg bg-gray-500 w-[200px]">READ MORE <span> ❯ </span></div>
                </div>
              </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}








