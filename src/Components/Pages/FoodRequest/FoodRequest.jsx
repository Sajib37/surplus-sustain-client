import { useEffect, useState } from "react";
import { useAuth } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import SingleRequest from "./SingleRequest";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const FoodRequest = () => {
    const { user } = useAuth();
    const [myRequests, setMyRequests] = useState(null);

    useEffect(() => {
        if (user) {
            axios
                .get(
                    `https://surplus-sustain-server.vercel.app/food/request/email/${user.email}`
                )
                .then((response) => {
                    setMyRequests(response.data); // Assuming the data is in the 'data' property of the response
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [user]);

    const handleRequestDelet = (id) => {
        Swal.fire({
            title: "Are you sure ?",
            text: "You can always add more if needed",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://surplus-sustain-server.vercel.app/request/delet/${id}`,
                    {
                        method: "DELETE",
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            setMyRequests(
                                myRequests.filter(
                                    (request) => request._id !== id
                                )
                            );
                            Swal.fire(
                                "Deleted!",
                                "Your Food has been deleted.",
                                "success"
                            );
                        }
                    });
            }
        });
    };

    return (
        <section className="bg-gray-100 py-8 md:py-12">
            <Helmet>
                <title>Surplus Sustain || Requested Food</title>
            </Helmet>
            <div className="bg-white px-2 py-4 mb-6 md:mb-8 max-w-screen-xl mx-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-Secondary font-bold">
                    All of your requested food items can be found below.
                </h1>
            </div>
            <section className="max-w-screen-xl min-h-[100px] relative mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:px-4  lg:grid-cols-4">
                {myRequests ? (
                    myRequests.length > 0 ? (
                        myRequests.map((request, idx) => (
                            <SingleRequest
                                key={idx}
                                request={request}
                                handleRequestDelet={handleRequestDelet}
                            ></SingleRequest>
                        ))
                    ) : (
                        <h1 className="text-xl md:text-2xl absolute top-1 left-auto mb-6 md:mb-8 lg:text-3xl text-center text-orange-400 font-semibold">
                            You currently have no food requests. If you require
                            any food, please feel free to submit a food request.
                        </h1>
                    )
                ) : (
                    <span className="sr-only">Loading...</span>
                )}
            </section>
        </section>
    );
};

export default FoodRequest;
