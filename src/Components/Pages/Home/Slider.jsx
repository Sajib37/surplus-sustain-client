import { Carousel } from "flowbite-react";

import slide1 from "../../../assets/sliderImage/slide1.jpg"
import slide2 from "../../../assets/sliderImage/slide2.jpg"
import slide3 from "../../../assets/sliderImage/slide3.webp"
import slide4 from "../../../assets/sliderImage/image4.jpg"
import slide5 from "../../../assets/sliderImage/slide5.jpg"
import slide6 from "../../../assets/sliderImage/slider6.jpg"

const Slider = () => {
    return (
        <div>
            <div className="lg:h-[60vh] sm:h-64 xl:h-96 2xl:h-96">
                <Carousel>
                    <img className="h-full" src={slide1} alt="..." />
                    <img className="h-full" src={slide2} alt="..." />
                    <img className="h-full" src={slide3} alt="..." />
                    <img className="h-full" src={slide4} alt="..." />
                    <img className="h-full" src={slide5} alt="..." />
                    <img className="h-full" src={slide6} alt="..." />
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;