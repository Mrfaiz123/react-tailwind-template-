import React from "react";
import Heading from "../componants/Heading";
import img40 from "../imges/hibootstrap.png"
function Footer() {
    return (
      <>
        <div className="h-[100vh] w-[100%] bg-red-400 flex items-center justify-around flex-col">
            <Heading Header={{class:" ",h:""}}/>
            <h1 className="text-white text-center font-extrabold text-5xl w-[65%]">Purchase the Nuva Template now & make your website more excellent!</h1>
            <button type="button" class="text-white hover:bg-red-700 font-medium w-[20%] bg-blue-900 rounded-md text-sm px-8 py-3 text-center  mr-3 md:mr-0">Purchase Nuva Now</button>
            <img src={img40} alt="" />
            <h1 className="text-white ">Crafted by MrFaiz</h1>
        </div>
      </>
    );
}
export default Footer;