import axios from "axios";
import { Label, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateFood = () => {
    const food = useLoaderData();

    const { _id, name, image, quantity, expireDate, location, notes, status } =
        food[0];

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const expireDate = form.expireDate.value;
        const location = form.location.value;
        const notes = form.notes.value;
        const status = form.status.value;
        const image = form.image.value;

        const updatedFood = {
            name,
            image,
            quantity,
            expireDate,
            location,
            notes,
            status,
        };
        console.log(updatedFood);
        fetch(`http://localhost:5000/food/update/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedFood),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success("Information updated successfully!");
                } else {
                    toast.error("Update Failed.!");
                }
            });
    };
    return (
        <div className="bg-gray-200 md:bg-gray-100 py-8 md:py-12 px-2">
            <Helmet>
                <title>Surplus Sutain || Update Food</title>
            </Helmet>
            <section className="max-w-md  mx-auto px-2 md:px-6  md:max-w-lg lg:max-w-xl bg-white rounded-lg py-10 md:py-12">
                <h1 className="text-2xl md:text-3xl mb-4 text-center text-Primary font-semibold">
                    Current Data of your food
                </h1>

                {/* Form starts here */}
                <form action="" onSubmit={handleUpdate}>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input-gray"
                                color="gray"
                                value="Food Name:"
                            />
                        </div>
                        <TextInput
                            name="name"
                            id="input-gray"
                            defaultValue={name}
                            type="text"
                            required
                            color="gray"
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input-gray"
                                color="gray"
                                value="Food image url:"
                            />
                        </div>
                        <TextInput
                            name="image"
                            id="input-gray"
                            type="text"
                            defaultValue={image}
                            required
                            color="gray"
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input-gray"
                                color="gray"
                                value="Food Quantity:"
                            />
                        </div>
                        <TextInput
                            name="quantity"
                            id="input-gray"
                            type="number"
                            defaultValue={quantity}
                            required
                            color="gray"
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input-gray"
                                color="gray"
                                value="Expire Date:"
                            />
                        </div>
                        <TextInput
                            name="expireDate"
                            id="input-gray"
                            type="date"
                            defaultValue={expireDate}
                            required
                            color="gray"
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input-gray"
                                color="gray"
                                value="Pickup Location:"
                            />
                        </div>
                        <TextInput
                            name="location"
                            id="input-gray"
                            type="text"
                            defaultValue={location}
                            required
                            color="gray"
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input-gray"
                                color="gray"
                                value="Additional Notes:"
                            />
                        </div>
                        <TextInput
                            name="notes"
                            id="input-gray"
                            type="text"
                            defaultValue={notes}
                            required
                            color="gray"
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input-gray"
                                color="gray"
                                value="Food Status:"
                            />
                        </div>
                        <TextInput
                            name="status"
                            id="input-gray"
                            type="text"
                            defaultValue={status}
                            required
                            color="gray"
                        />
                    </div>

                    <button
                        name="submit"
                        className="w-full h-full text-white bg-[#0E7490] py-2 mt-3 rounded-lg"
                    >
                        Update
                    </button>
                </form>

                <ToastContainer></ToastContainer>
            </section>
        </div>
    );
};

export default UpdateFood;
