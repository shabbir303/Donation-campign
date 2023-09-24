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
         
            <div className="hero min-h-[500px]  relative " style={{backgroundImage: 'url(https://i.ibb.co/QmRtn1n/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)', opacity:'0.1' }}>
            <h1 className="mb-[180px] ">I Grow By Helping People In Need</h1>      
  </div>
  <div className=" flex sm:flex-row md:flex-row items-center mt-[-300px] right-[800px]  absolute">
        
        <input type="search" name="" id="" placeholder="search here..." className="border-[1px] p-[10px]" />
        <button className="btn bg-black text-white ">Search here</button>
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