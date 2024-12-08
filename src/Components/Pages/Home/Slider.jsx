import { Carousel } from "flowbite-react";
import slide3 from "../../../assets/sliderImage/sl4.jpg"
import slide4 from "../../../assets/sliderImage/sl3.jpg"
import pic1 from "../../../assets/sliderImage/sl2.jpg"
import pic2 from "../../../assets/sliderImage/sl1.jpeg"

const Slider = () => {
    return (
        <div>
            <div className=" h-[35vh] md:h-[50vh] lg:h-[80vh] ">
                <Carousel>
                    <img className="h-full" src={slide3} alt="..." />
                    <img className="h-full" src={pic1} alt="..." />
                    <img className="h-full" src={pic2} alt="..." />
                    <img className="h-full" src={slide4} alt="..." />
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;