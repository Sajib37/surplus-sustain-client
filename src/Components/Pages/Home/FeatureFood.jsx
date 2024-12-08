import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleFetureFood from "./SingleFetureFood";
import { Button, Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const FeatureFood = () => {
    const [foods, setFood] = useState(null);
    useEffect(() => {
        axios
            .get(`http://localhost:5000/availableFood`)
            .then((data) => {
                setFood(data.data.sort((a, b) => b.quantity - a.quantity));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const navigate = useNavigate();
    const changeRoute = () => {
        navigate("/availableFoods");
    };

    return (
        <section className="bg-gray-100  pb-10 md:pb-12 lg:pb-16 border">
            <div className="max-w-screen-xl mx-auto my-6 md:my-10 lg:my-12 py-2 px-2 ">
                <h1 className="text-Primary font-semibold text-center text-3xl md:text-4xl lg:text-5xl  font-serif">
                    Abundance of Featured Foods
                </h1>
                <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl text-Secondary mt-2">
                    Explore a Variety of Culinary Delights Overflowing with
                    Flavor
                </h1>
            </div>
            {foods ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-1 max-w-screen-xl mx-auto">
                    {foods.slice(0, 6).map((food, idx) => (
                        <SingleFetureFood
                            key={idx}
                            food={food}
                        ></SingleFetureFood>
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <Spinner aria-label="Center-aligned spinner example" />
                </div>
            )}

            <Button
                onClick={changeRoute}
                
                className="mx-auto mt-4 md:mt-6 bg-[#3FC1C9]"
            >
                Show all Food
            </Button>
        </section>
    );
};

export default FeatureFood;
