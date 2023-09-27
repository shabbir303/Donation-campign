import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='mt-[15px] md:mt-[20px] lg:mt-[30px] '>
            <Outlet ></Outlet>
            </div>
        </div>
    );
};

export default Root;