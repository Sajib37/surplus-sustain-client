import { Carousel } from "flowbite-react";
import slide3 from "../../../assets/sliderImage/slide3.webp"
import slide4 from "../../../assets/sliderImage/image4.jpg"
import pic1 from "../../../assets/sliderImage/pic1.jpg"
import pic2 from "../../../assets/sliderImage/pic2.jpg"

const Slider = () => {
    return (
        <div>
            <div className=" h-[35vh] md:h-[50vh] lg:h-[70vh] ">
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