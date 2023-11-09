import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('/testimonials.json')
            .then(res=>res.json())
            .then(data => setTestimonials(data))
        
    }, []);
    
    console.log(testimonials)
    
    return (
        <section className='gap-4 bg-gray-200 py-10'>
            <section className='max-w-screen-xl mx-auto'>
                <h1 className="text-3xl md:text-4xl mb-6 text-center text-Primary font-semibold font-lobster">Voices of Impact: Stories That Nourish the Soul</h1>
                <section className=' grid gap-4 grid-cols-1'>
                    {testimonials && 
                        testimonials.map((testimonial, idx) => <Testimonial key={idx} testimonial={testimonial} />)
                    }
                </section>
            </section>
        </section>
        
    );
};

export default Testimonials;