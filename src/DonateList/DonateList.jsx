

const DonateList = ({donateList}) => {
    console.log(donateList);
    const{image, titleName, title,donationAmount,backgroundColor,textColor, textBackground  }= donateList;
    return (
        <div className=" flex gap-[24px]  items-center rounded-xl " style={{background: `${backgroundColor}` }} >
            <img src={image} alt="" srcset="" />
            <div>
                <h1 className="text-[14px] font-[400] w-[80px] px-[5px] mb-1 rounded-sm text-center " style={{background: `${textBackground}`, color:`${textColor}` }} >{titleName} </h1>
                <p className="text-[24px] font-[600] " >{title} </p>
                <h1 className="text-[16px] font-[600] " style={{color: `${textColor}` }} > ${donationAmount} </h1>
                <button className="btn mt-4 text-white text-[18px] font-[600] " style={{background: `${textColor}` }} >View Details</button>
            </div>
        </div>
    );
};

export default DonateList;