/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import swal from "sweetalert";


const EachDonate = ({ eachDonate }) => {
    const { id, image, donationAmount, description, textBackground,backgroundColor, textColor, titleName,title,donateImage } = eachDonate;
    // console.log(eachDonate)
    const handleDonation=()=>{
        const addedDonation = [];

     const donation = JSON.parse(localStorage.getItem("donate"));

     if(!donation){
      addedDonation.push(eachDonate);
      localStorage.setItem("donate", JSON.stringify(addedDonation));
      swal("Good job!", "Donation Successfull!", "success");
    }
     else{
        const donationExists = donation.find(eachDonate=> eachDonate.id === Number(id));
        

        if(!donationExists){
            addedDonation.push(...donation, eachDonate);
            localStorage.setItem("donate", JSON.stringify(addedDonation));
            swal("Good job!", "Donation Successfull!", "success");
        }
        else{
            console.log("already Donate")
            swal("Error!", "Already Donate!", "error");
        }
    }
    }

    return (
        <div>
             <div className= 'rounded-3xl w-[80%] lg:w-[60%]  mx-auto realtive '  >
                <div className="bg-[#0b0b0b80] w-[312px] lg:w-[1152px] z-10 h-[90px] lg:h-[152px] rounded-xl absolute mt-[103px] lg:mt-[397px] mr-[150px] "></div>
            <img src={donateImage} alt="" srcset="" className="w-full lg:h-[550px] rounded-xl"  />
            <button onClick={handleDonation} className="btn text-white absolute mt-[-70px] lg:mt-[-100px] left-[50px] lg:left-[440px] z-20  " style={{backgroundColor: `${textColor}` }} >Donate ${donationAmount} </button>
            <h1 className=" text-[30px] lg:text-[40px] font-[700] mt-[30px] ">{title} </h1>
            <p className="mt-[20px] text-[16px] font-[400] ">{description} </p>
        </div>
        </div>
    );
};

export default EachDonate;