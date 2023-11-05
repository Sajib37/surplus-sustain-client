import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar/Navbar";
import FooTer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="font-poppins">
            <div className="max-w-screen-xl mx-auto lg:py-1">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <div>
               <FooTer></FooTer>
            </div>
        </div>
    );
};

export default Root;