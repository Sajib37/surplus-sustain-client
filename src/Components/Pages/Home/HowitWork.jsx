import { Accordion } from "flowbite-react";

const HowitWork = () => {
    return (
        <section className="bg-gray-100 py-10 px-1">
            <section className=" bg-white max-w-screen-xl mx-auto mb-3 py-4">
                <h1 className="text-3xl md:text-4xl  text-center text-Primary font-semibold font-serif">
                    The Process Unveiled
                </h1>
            </section>

            <section className="max-w-screen-xl mx-auto bg-white">
                <Accordion collapseAll>
                    <Accordion.Panel>
                        <Accordion.Title className="text-lg text-Secondary font-semibold">1. Surplus Collection</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Our initiative begins with the generous
                                contributions from local farms, restaurants, and
                                businesses. They play a crucial role by donating
                                surplus food, which encompasses a diverse range
                                of items such as fresh produce, packaged goods,
                                and prepared meals. This collaborative effort
                                forms the foundation of our mission to combat
                                food waste and promote sustainability.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-lg text-Secondary font-semibold">2. Quality Check</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Ensuring the safety and freshness of donated
                                food is paramount. Our dedicated team
                                meticulously conducts a thorough quality check
                                on all incoming items. Prioritizing nutritional
                                value and high quality, we aim to provide our
                                community with food that not only meets but
                                exceeds safety standards.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-lg text-Secondary font-semibold">
                            3. Listing and Distribution
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Once the quality check is completed, approved
                                surplus food items are thoughtfully listed on
                                our platform. Comprehensive details and vibrant
                                images accompany each listing, offering
                                community members a transparent view of the
                                available items. This step enables users to make
                                informed choices as they browse and select the
                                food items that best suit their preferences.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-lg text-Secondary font-semibold">
                            4. Local Pickup Points
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                In a bid to minimize environmental impact, we
                                strongly encourage users to opt for local pickup
                                points. This approach not only fosters a sense
                                of community engagement but also significantly
                                reduces transportation emissions. By connecting
                                users through nearby pickup locations, we
                                enhance the efficiency and sustainability of the
                                distribution process.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="text-lg text-Secondary font-semibold">
                            5. Community Connection
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Beyond the simple act of food distribution, our
                                initiative is about building a vibrant and
                                interconnected community. Food donors,
                                recipients, and dedicated volunteers come
                                together, sharing a common value for
                                sustainability. We believe in fostering
                                meaningful connections among our community
                                members, creating an environment where the joy
                                of good food is equaled by a commitment to a
                                healthier planet.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </section>
        </section>
    );
};

export default HowitWork;
