import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
const NavBar = () => {
    return (
        <Navbar fluid rounded className="sticky top-0 left-0">
            <Link to='/'>
                <Navbar.Brand  className="md:mx-auto md:mb-2 lg:mx-0 lg:mb-0">
                    <img src={logo} className="mr-1 h-12 lg:h-14 hidden md:block" alt="Logo" />
                    <span className="text-Primary text-3xl lg:text-4xl font-lobster">
                        Surplus Sustain
                    </span>
                </Navbar.Brand>
            </Link>
            <div className="flex md:order-2 gap-1">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                            alt="User settings"
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded
                        />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="text-black">
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-Primary mb-3 md:mb-0 font-bold underline underline-offset-4" : "mb-2 md:mb-0"}>
                    Home
                </NavLink>
                <NavLink to="/availableFoods" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-Primary mb-3 md:mb-0 font-bold underline underline-offset-4" : "mb-2 md:mb-0"}>
                    Available Foods
                </NavLink>
                <NavLink to="/manageFoods" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-Primary mb-3 md:mb-0 font-bold underline underline-offset-4" : "mb-2 md:mb-0"}>
                    Manage Foods
                </NavLink>
                <NavLink to="/foodRequests" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-Primary mb-3 md:mb-0 font-bold underline underline-offset-4" : "mb-2 md:mb-0"}>
                    Food Request
                </NavLink>
                <NavLink to="/addFood" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-Primary mb-3 md:mb-0 font-bold underline underline-offset-4" : "mb-2 md:mb-0"}>
                    Add Food
                </NavLink>
                <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-Primary mb-3 md:mb-0 font-bold underline underline-offset-4" : "mb-2 md:mb-0"}>
                    Login
                </NavLink>
                
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
