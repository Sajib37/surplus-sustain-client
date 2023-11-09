import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import user1 from "../../../assets/user1.png"


const NavBar = () => {

    const { user, logOut } = useAuth();
    const [photo, setPhoto] = useState(null);
    const [email,setEmail]=useState(null)
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        if (user) {
            setUserName(user.displayName)
            setEmail(user.email)
            if (user.photoURL) {
                setPhoto(user.photoURL)
            }
            else {
                setPhoto(user1)
            }
        }
    }, [user])
    
    const handleLogOut = () => {
        logOut()
            .then(result => {
            toast.success('Logout successful !')
            })
            .catch(error => {
            toast.error('Logout Failed.!')
            
        })
    }
    return (
        <Navbar fluid rounded className="bg-white">
            <Link to='/' className="md:mx-auto flex items-center md:mb-2 lg:mx-0 lg:mb-0">
                    <img src={logo} className=" h-12 lg:h-14" alt="Logo" />
                    <span className="text-Primary text-xl md:text-3xl  font-lobster">
                        Surplus Sustain
                    </span>
            </Link>
            <div className="flex md:order-2 gap-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        user ?
                        <Avatar
                            alt="User settings"
                            img={photo}
                            rounded
                        />:
                        // <Avatar
                        //     alt="User settings"
                        //     img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        //     rounded
                        // />
                            ''
                    }
                >
                    <Dropdown.Header>
                        <span className="block font-bold text-base ">{ userName}</span>
                        <span className="block truncate text-sm font-medium">
                            {email}
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="text-black pl-4">
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
                    My Request
                </NavLink>
                <NavLink to="/addFood" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-Primary mb-3 md:mb-0 font-bold underline underline-offset-4" : "mb-2 md:mb-0"}>
                    Add Food
                </NavLink>
                {
                    user?
                        <button onClick={handleLogOut} className=" text-Primary w-14" color="gray">Logout</button> :
                        <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-Primary mb-3 md:mb-0 font-bold underline underline-offset-4" : "mb-2 md:mb-0"}>
                            Login
                        </NavLink>
                }
                <ToastContainer></ToastContainer>
                        
            </Navbar.Collapse>
            
        </Navbar>
    );
};

export default NavBar;
