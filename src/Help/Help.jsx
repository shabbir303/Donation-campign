/* eslint-disable react/prop-types */


const Help = ({donation}) => {
    const{image, titleName, title,backgroundColor,textColor }=donation
    return (
        <div className={`rounded-xl bg-${backgroundColor}`}>
            <img src={image} alt="" srcset="" className="w-[300px] h-[194px]" />
            <h1>{titleName} </h1>
            <h1>{title} </h1>
        </div>
    );
};

export default Help;