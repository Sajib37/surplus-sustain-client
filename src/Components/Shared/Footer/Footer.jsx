import { Footer } from "flowbite-react";
import logo from "../../../assets/logo.png";
import {
    BsDribbble,
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const FooTer = () => {
    return (
        <Footer container bgDark>
            <div className="max-w-screen-xl mx-auto w-full py-8">
                <div className="w-full ">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div className="flex flex-col mb-8 md:mb-0">
                            <Link to="/">
                                <Footer.Brand
                                    // href="https://flowbite.com"
                                    src={logo}
                                    alt="Logo"
                                    className="md:mx-auto mx-0 h-14 md:h-16"
                                />
                            </Link>
                            <h1 className="text-Primary text-3xl lg:text-4xl font-lobster"> Surplus Sutain</h1>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 md:w-2/3">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Contact us</Footer.Link>
                                    <Footer.Link href="#">Team</Footer.Link>
                                    <Footer.Link href="#">Mission</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col> 
                                    <Footer.Link href="#">Instagram</Footer.Link>
                                    <Footer.Link href="#">Facebook</Footer.Link>
                                    <Footer.Link href="#">Twitter</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms &amp; Conditions
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Disclaimer
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="Surplus Sustain™ all right reserved"
                            year={2023}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default FooTer;
