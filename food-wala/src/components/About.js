import { Link } from "react-router-dom"
import Image from "../assets/images/About.jpg"
const About=()=>{
    return(
        <div className="h-full">
            <div className="flex  flex-wrap justify-between items-center">
            <h1 className="text-gray-700 font-semibold ml-16 text-6xl text-left mt-28  ">  A Journey <br/> Through the World of<br />{" "}</h1>
            <div className="items-start flex flex-wrap">
            <div className=" mt-4 p-3 ml-16 mr-20  rounded-lg bg-orange-400 text-white font-semibold text-6xl   "> Culinary Delights </div>
            <Link to="/about">
            <img class="flex-row items-end ml-48 -mt-[190] w-96 h-96 mb-20 " src={Image} />
            </Link>
            </div>
         
            
            
            </div>
            
           
            
           
        </div>
    )

}
export default About;