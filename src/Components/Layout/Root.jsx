import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/Navbar/Navbar";
import FooTer from "../Shared/Footer/Footer";
import { useEffect } from "react";

const Root = () => {
    const pathname= useLocation()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])
    
    return (
        <div className="font-poppins bg-Primary">
            <div className="sticky top-0 left-0 w-full bg-white z-40">
                <div className="w-full mx-auto">
                    <NavBar></NavBar>
                </div>
            </div>
            <Outlet></Outlet>
            <div className="">
               <FooTer></FooTer>
            </div>
        </div>
    );
};

export default Root;