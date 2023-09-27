/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";


const Help = ({ donation }) => {
    const { image, category, title, backgroundColor, textColor, textBackground,id } = donation;
    
    return (
       <NavLink to = {`/Donate/${id}`}>
         <div className="rounded-xl min-h-full lg:min-h-full" style={{ backgroundColor: `${backgroundColor}`, color: `${textColor}` }} >
            <img src={image} alt="" srcset="" className="w-full h-fit rounded-xl" />
            <div className="p-[10px]">
                <h1 className="text-[14px] font-[500] w-[80px] text-center rounded-md " style={{ backgroundColor: `${textBackground}` }} > {category} </h1>
                <h1 className="text-[20px] font-[600]">{title} </h1>
            </div>
        </div>
       </NavLink>
    );
};

export default Help;