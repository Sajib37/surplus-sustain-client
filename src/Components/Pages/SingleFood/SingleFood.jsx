import { Button } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const food = useLoaderData();
    const { _id, name, image, quantity, location, expireDate, notes, donorName, donorEmail, donorImage, status } = food[0];
    return (
        <section className="bg-gray-100 py-8 md:py-14">
            <section className="max-w-screen-xl mx-auto py-4 bg-white mb-4">
                <h1 className="text-xl md:text-3xl text-center text-Primary font-bold">Details of { name}</h1>
            </section>
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row bg-white">
                <div className=" w-full md:h-80 lg:h-full lg:w-1/2">
                    <img className=" w-full h-full" src={image} alt="" />
                </div>
                <div className="pb-4 lg:p-10 px-2 md:px-12  mt-4 lg:mt-0">
                    <h1 className="text-center lg:text-start text-2xl md:text-4xl text-Primary font-bold">Food: {name}</h1>
                    <h2 className="text-center lg:text-start text-lg md:text-xl mt-2 text-Secondary font-semibold">Note: {notes}</h2>
                    <div className="my-2 md:my-4 ">
                        <h3 className="text-Accent"><span className="text-Primary font-semibold">Quantity:</span> {quantity} persons can eat.</h3>
                        <h3 className="text-Accent"><span className="text-Primary font-semibold">Status:</span> { status}</h3>
                        <h3 className="text-Accent"><span className="text-Primary font-semibold">Expire Date:</span> {expireDate}</h3>
                        <h3 className="text-Accent"><span className="text-Primary font-semibold">Pickup Location:</span> { location}</h3>
                    </div>
                    <div className="">
                        <h2 className="text-lg text-Secondary font-semibold mb-1">Donor Info:</h2>
                        <div className="flex gap-1">
                            <div>
                                <img className="w-12 h-12 rounded-full" src={donorImage} alt="" />
                            </div>
                            <div>
                                <h3 className="font-semibold">{donorName}</h3>
                                <h3 className="text-gray-600"><a href="#" className="hover:text-green-800">{ donorEmail}</a></h3>
                            </div>
                        </div>
                    </div>
                    <Button className="mt-4 mx-auto">Request</Button>
                </div>
            </div>
        </section>
    );
};

export default SingleFood;