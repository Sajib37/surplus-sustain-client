import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar/Navbar";
import FooTer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="font-poppins">
            <div className="sticky top-0 left-0 w-full bg-white z-40">
                <div className="max-w-screen-xl mx-auto  lg:py-1">
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