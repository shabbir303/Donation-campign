import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EachDonate from "../EachDonate/EachDonate";


const DonationPage = () => {
    const donates = useLoaderData();
    // console.log(donates)
    const {id} = useParams();
    console.log(id)
    const [singleDonate, setSingleDonate] = useState([]);

   

    useEffect(()=>{
            const findDonates = donates.find(donate => donate.id === Number(id)) 
            console.log(findDonates)
            setSingleDonate(findDonates);

    }, [donates, id])
        

   
    return (
        <div >
            <EachDonate eachDonate={singleDonate} ></EachDonate>
        </div>
    );
};

export default DonationPage;