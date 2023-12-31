/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */


const DonateList = ({donateList}) => {
    console.log(donateList);
    const{image, category, title,donationAmount,backgroundColor,textColor, textBackground  }= donateList;
    return (
        <div className=" flex flex-col md:flex-row  lg:flex-row  gap-[24px]  items-center rounded-xl " style={{background: `${backgroundColor}` }} >
            <img src={image} alt="" srcset="" className="w-full md:w-fit lg:w-fit rounded-xl md:rounded-none lg:rounded-none " />
            <div>
                <h1 className="text-[14px] font-[400] w-[80px] px-[5px] mb-1 rounded-sm text-center " style={{background: `${textBackground}`, color:`${textColor}` }} >{category} </h1>
                <p className="text-[24px] font-[600] " >{title} </p>
                <h1 className="text-[16px] font-[600] " style={{color: `${textColor}` }} > ${donationAmount} </h1>
                <button className="btn mt-2 md:mt-4 lg:mt-4 mb-[15px] mt:mb-0 lg:mb-0 text-white text-[18px] font-[600] " style={{background: `${textColor}` }} >View Details</button>
            </div>
        </div>
    );
};

export default DonateList;