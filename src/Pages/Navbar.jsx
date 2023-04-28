import logo from "../imges/logo-loader.png"
import React,{useEffect} from "react";
import "animate.css/animate.min.css";
import Aos from "aos";
import "aos/dist/aos.css";


function Navbar() {

          useEffect(()=> {
            Aos.init({duration:2000});
        },[]);
    return (
      <>
          
<nav data-aos="fade-down" class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 top-0 sticky z-50 w-full z-20 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="container flex flex-wrap items-center justify-around mx-auto">
  <div  class="mid flex items-center ">
     <img className="logo" src={logo} alt="" />
     <h1 className="nav-heading text-gray-900 ml-5 text-3xl">SPORT. AK</h1>
  </div>
  <div class="flex md:order-2">
      <button type="button" class="btn hover:bg-black-300 text-white font-medium rounded-md text-sm px-8 py-3 text-center  mr-3 md:mr-0">Buy Now!</button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li className="block py-2 pl-3 pr-4 text-white md:bg-transparent text-lg cursor-pointer md:text-orange-700  md:p-0 dark:text-white">LTR Demos</li>
      <li className="block py-2 pl-3 pr-4 text-white md:bg-transparent text-lg cursor-pointer md:text-gray-700 hover:text-pink-900 md:p-0 dark:text-white">LTR Demos</li>
      <li className="block py-2 pl-3 pr-4 text-white md:bg-transparent text-lg cursor-pointer md:text-gray-700 hover:text-pink-900 md:p-0 dark:text-white">Features</li>
      <li className="block py-2 pl-3 pr-4 text-white md:bg-transparent text-lg cursor-pointer md:text-gray-700 hover:text-pink-900 md:p-0 dark:text-white">Other Versions</li>
      <li className="block py-2 pl-3 pr-4 text-white md:bg-transparent text-lg cursor-pointer md:text-gray-700 hover:text-pink-900 md:p-0 dark:text-white">Support</li>
    </ul>
  </div>
  </div>
</nav>

      
      </>
    );
  }
  
export default Navbar;
  