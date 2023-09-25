import { useEffect, useState } from "react";


const Donation = () => {
    const[donationList, setDonationList] = useState([]);
    const[noFound, setNoFound] = useState(false);

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
            {noFound?<p>{noFound} </p>:<div></div> }
        </div>
    );
};

export default Donation;