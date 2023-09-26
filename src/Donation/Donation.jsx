/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import DonateList from "../DonateList/DonateList";


const Donation = () => {
    const[donationList, setDonationList] = useState([]);
    const[noFound, setNoFound] = useState(false);
    const[dataLength, setDataLenth]= useState(4);

    useEffect(()=>{
        const donation = JSON.parse(localStorage.getItem("donate"));
        if(donation){
            setDonationList(donation);
        }else{
         console.log("no data found");
         setNoFound('No Data Found')
        }
    }, [])
    console.log(donationList);
    return (
        <div>
            {noFound?<p className="h-[80vh] flex justify-center items-center text-[60px] font-[700] ">{noFound} </p>:<div></div> }


            <div className="w-[80%] grid grid-cols-2 mx-auto gap-[20px] ">
            {
              donationList.slice(0, dataLength) .map(donate=><DonateList donateList={donate}  ></DonateList> )
            }

            </div>

            <div className={dataLength==donationList.length||noFound||donationList.length<4 ?"hidden":'' }>
                <button onClick ={()=>setDataLenth(donationList.length)}
                className="btn flex justify-center items-center mt-[40px] text-center mx-auto text-white bg-gradient-to-r from-slate-900 to-slate-700 " >Show more </button>
            </div>
        </div>
        
    );
};

export default Donation;