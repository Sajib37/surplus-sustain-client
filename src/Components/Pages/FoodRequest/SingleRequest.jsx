import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";

const SingleRequest = ({ request, handleRequestDelet }) => {
    const { _id, foodID, requestDate, donation } = request;
    const [food, setFood] = useState(null);
    useEffect(() => {
        axios
            .get(
                `https://surplus-sustain-server.vercel.app/singleFood/${foodID}`
            )
            .then((result) => setFood(result.data))
            .catch((error) => console.log(error));
    }, [foodID]);
    console.log(_id);

    if (food) {
        const {
            name,
            image,
            donorName,
            donorEmail,
            location,
            expireDate,
            status,
        } = food[0];
        return (
            <Card
                className="max-w-sm mx-auto relative"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={image}
            >
                <div>
                    <div className="mb-2">
                        <h1 className="text-Secondary text-xl font-semibold">
                            {name}
                        </h1>
                        <h1 className="text-sm text-Accent">
                            Expires: {expireDate}
                        </h1>
                        <h1
                            className={` text-xs font-semibold ${
                                status === "Delivered"
                                    ? "text-orange-600"
                                    : "text-green-600"
                            }`}
                        >
                            <span className={`text-sm text-Accent `}>
                                Status:
                            </span>{" "}
                            {status}
                        </h1>
                    </div>

                    <div>
                        <h1 className="text-lg text-Secondary font-semibold">
                            Donor Info.
                        </h1>
                        <p className="text-sm font-semibold">{donorName}</p>
                        <p className="text-xs text-blue-800 hover:cursor-pointer hover:text-orange-500">
                            {donorEmail}
                        </p>
                    </div>
                </div>
                <MdCancel
                    onClick={() => handleRequestDelet(_id)}
                    className="absolute top-1 right-1 text-red-600 text-4xl hover:cursor-pointer"
                ></MdCancel>
            </Card>
        );
    } else {
        return <span className="sr-only">Loading...</span>;
    }
};

export default SingleRequest;
