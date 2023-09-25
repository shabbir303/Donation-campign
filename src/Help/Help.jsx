/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */


const Help = ({donation}) => {
    const{image, titleName, title,backgroundColor,textColor,textBackground }=donation;
    const bgClass = `bg-${backgroundColor}`;
    const textClass = `text-${textColor}`;
    return (
        <div className={`rounded-xl ${bgClass} ${textClass} `} style={{backgroundColor:`${backgroundColor}`, color:`${textColor}`}} >
            <img src={image} alt="" srcset="" className="w-full h-fit rounded-xl" />
           <div className="p-[10px]">
           <h1 className="text-[14px] font-[500] w-[80px] text-center rounded-md " style={{backgroundColor:`${textBackground}` }} > {titleName} </h1>
            <h1 className="text-[20px] font-[600]">{title} </h1>
           </div>
        </div>
    );
};

export default Help;