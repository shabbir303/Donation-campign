/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Help from "../Help/Help";


const Home = () => {
  const [donate, setDoanate] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  

  useEffect(() => {
    fetch('donation.json')
      .then(res => res.json())
      .then(data => {setDoanate(data);
      
      });
  }, [])

  

  const handleSearchClick = () => {
    
    const filteredData = donate.filter(item =>
      item.category.toLowerCase().includes(searchInput.toLowerCase())
    );
   
    setDoanate(filteredData)
  };

  return (
    <div >

      <div className="hero min-h-[500px]  relative bg-[url(https://i.ibb.co/QmRtn1n/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)] opacity-10  ">

      </div>
      <h1 className=" mt-[-280px] text-center md:text-center  lg:mt-[-400px] right-[10px] md:left-[80px]  left-[30px]  lg:left-[550px]  lg:right-[500px] z-10 absolute text-[25px] font-[700] lg:text-[48px] lg:font-[700] ">I Grow By Helping People In Need</h1>
      <div className=" flex flex-row lg:flex-row items-center mt-[-200px] lg:mt-[-300px] right-[50px] md:right-[250px] lg:right-[700px]  absolute">

        <input  onChange={(e) => setSearchInput(e.target.value)} type="search" name="" id="" value={searchInput} placeholder="search here..." className="border-[1px] p-[10px] z-10 w-[200px] lg:w-[400px] rounded-lg " />
        <button onClick={handleSearchClick} className="btn bg-[#FF444A] text-white z-10 ">Search </button>
      </div>
      <div className="mt-[80px]  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[80%] mx-auto mb-[50px]">
        {
          donate.map(singleFundation => <Help donation={singleFundation}></Help>)
        }
      </div>
    </div>

  );
};

export default Home;