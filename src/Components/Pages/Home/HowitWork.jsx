import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';


const HowitWork = () => {
    return (
        <section className='bg-gray-200 py-10 px-2'>
            <section className=' bg-white max-w-screen-xl mx-auto mb-6 py-4'>
                <h1 className="text-3xl md:text-4xl  text-center text-Secondary font-semibold font-lobster">From Surplus to Shared Success: Unveiling Our Process</h1>
            </section>
            
            <section className='max-w-screen-xl mx-auto '>
                <Timeline className=''>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Title>1. Surplus Collection</Timeline.Title>
                    <Timeline.Body>
                        Local farms, restaurants, and businesses donate surplus food to our platform. This can include fresh produce, packaged goods, and prepared meals
                    </Timeline.Body>
                    <Button color="gray" >
                        Learn More
                        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                    </Button>
                    </Timeline.Content>
                </Timeline.Item>
                    <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Title>2. Quality Check</Timeline.Title>
                    <Timeline.Body>
                        Our team performs a thorough quality check to ensure that all donated food meets safety and freshness standards. We prioritize nutritious and high-quality items.
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                    <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
                    <Timeline.Body>
                    The approved surplus food items are listed on our platform, complete with details and images. Community members can browse and select the items they want.
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
            </section>
        </section>
    );
};

export default HowitWork;