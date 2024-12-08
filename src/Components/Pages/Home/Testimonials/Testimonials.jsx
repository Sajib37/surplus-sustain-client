import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
import { Carousel } from 'flowbite-react';


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('/testimonials.json')
            .then(res=>res.json())
            .then(data => setTestimonials(data))
        
    }, []);
    
    console.log(testimonials)
    
    return (
        <section className='gap-4 bg-[#F1F0E8] py-10'>
            <section className='max-w-screen-xl mx-auto'>
                <h1 className="text-3xl md:text-4xl mb-6 text-center text-Primary font-bold font-serif">Voices of Impact: Stories That Nourish the Soul</h1>
                <section className=' grid gap-4 grid-cols-1'>
                    {testimonials && 
                        <div className="lg:h-[35vh] md:h-[45vh] h-[60vh] bg-[#F1F0E8]">
                            <Carousel>
                                {
                                    testimonials.map((testimonial, idx) => <Testimonial key={idx} testimonial={testimonial} />)
                                } 
                            </Carousel>
                        </div>
                    }
                    
                </section>
            </section>
        </section>
        
    );
};

export default Testimonials;