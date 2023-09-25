/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Help from "../Help/Help";


const Home = () => {
     const [donate, setDoanate] = useState([]);
     useEffect(()=>{
      fetch('donation.json')
      .then(res=> res.json())
      .then(data=>setDoanate(data))
    },[])
    return (
        <div>
         
            <div className="hero min-h-[500px]  relative bg-[url(https://i.ibb.co/QmRtn1n/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)] opacity-10  ">
                 
  </div>
  <h1 className="mt-[-400px] right-[600px] z-10 absolute text-[48px] font-[700] ">I Grow By Helping People In Need</h1> 
  <div className=" flex sm:flex-row md:flex-row items-center mt-[-300px] right-[750px]  absolute">
        
        <input type="search" name="" id="" placeholder="search here..." className="border-[1px] p-[10px] z-10 w-[400px] " />
        <button className="btn bg-[#FF444A] text-white z-10 ">Search </button>
        </div>
   <div className="mt-[80px] grid grid-cols-4 gap-6 w-[80%] mx-auto mb-[50px]">
    {
      donate.map(singleFundation => <Help donation={singleFundation}></Help> )
    }
   </div>
</div>
        
    );
};

export default Home;