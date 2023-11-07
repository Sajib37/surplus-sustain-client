import { Label, TextInput,Button } from 'flowbite-react';
import { ToastContainer } from 'react-toastify';


const AddFood = () => {

    const hanldeAddFood = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const expireDate = form.expireDate.value;
        const location = form.location.value;
        const notes = form.notes.value;
        const status = form.status.value;
        const newFood = {
            name,image,quantity,expireDate,location,notes,status
        }

        console.log(newFood)

        form.reset();

    }

    return (
        <div className="bg-gray-200 md:bg-gray-100 py-8 md:py-12 px-2">
            <section className="max-w-md  mx-auto px-2 md:px-6  md:max-w-lg lg:max-w-xl bg-white rounded-lg py-10 md:py-12">
                <h1 className="text-2xl md:text-3xl mb-4 text-center text-Primary font-semibold">
                    Be a Food Hero: Add Food
                </h1>

                {/* Form starts here */}
                <form action="" onSubmit={hanldeAddFood} >
                    
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" value="Food Name:" />
                        </div>
                        <TextInput name='name' id="input-gray" placeholder="Enter your food name" type='text' required color="gray"/>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" value="Food image url:" />
                        </div>
                        <TextInput name='image' id="input-gray" type='text' placeholder="Enter Food image url" required color="gray"/>
                    </div>
                    
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" value="Food Quantity:" />
                        </div>
                        <TextInput name='quantity' id="input-gray" type='number' placeholder="How many people can eat?" required color="gray"/>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" value="Expire Date:" />
                        </div>
                        <TextInput name='expireDate' id="input-gray" type='date' placeholder="Enter the expire date" required color="gray"/>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" value="Pickup Location:" />
                        </div>
                        <TextInput name='location' id="input-gray" type='text' placeholder="Enter your location" required color="gray"/>
                    </div>
                    
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" value="Additional Notes:" />
                        </div>
                        <TextInput name='notes' id="input-gray" type='text' placeholder="Enter additional notes shortly" required color="gray"/>
                    </div>
                    
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" value="Food Status:" />
                        </div>
                        <TextInput name='status' id="input-gray" type='text' defaultValue="Available" required color="gray"/>
                    </div>



                    <button name='submit' className='w-full h-full text-white bg-[#0E7490] py-2 mt-3 rounded-lg'>Add Food</button>
                </form>

                <ToastContainer></ToastContainer>
            </section>
        </div>
    );
};

export default AddFood;