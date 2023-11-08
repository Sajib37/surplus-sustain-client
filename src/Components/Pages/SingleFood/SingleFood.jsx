import { useLoaderData } from "react-router-dom";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SingleFood = () => {
    const food = useLoaderData();
    const [userEmail,setEmail]=useState(null)
    const [userName,setUserName]=useState(null)
    const [userPhoto, setUserPhoto] = useState(null)
    
    const { user } = useAuth();
    const [openModal, setOpenModal] = useState(false);
    const emailInputRef = useRef < HTMLInputElement > (null);

    useEffect(() => {
        if (user) {
            setEmail(user.email)
            setUserName(user.displayName)
            setUserPhoto(user.photoURL)
        }
    }, [user])
    
    const { _id, name, image, quantity, location, expireDate, notes, donorName, donorEmail, donorImage, status } = food[0];

    const handleRequestForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const notes1 = form.notes1.value;
        const requestDate = form.RequestDate.value;
        const donation = form.donation.value;
        const requestFood = {
            foodID: _id,
            name,
            image,
            quantity,
            location,
            expireDate,
            notes,
            donorName,
            donorEmail,
            donorImage,
            userEmail,
            userName,
            userPhoto,
            notes1,
            requestDate,
            donation
        }

        axios.post('http://localhost:5000/requestFood', requestFood)
            .then(response => {
                toast.success("Request success.Wait for the Donor response")
                })
            .catch(error => {
                toast.error("Request Failed")
            })

        setOpenModal(false)
    }

    return (
        <section className="bg-gray-100 py-8 md:py-14">
            <ToastContainer></ToastContainer>
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


                    {/* Modal start here */}
                    <Button onClick={() => setOpenModal(true)} className="mt-4 mx-auto">Request</Button>
                    <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
                        <Modal.Header />
                        <Modal.Body>
                            
                        <form action=""  onSubmit={handleRequestForm}>                    
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="input-gray" color="gray" value="Food Name:" />
                                </div>
                                <TextInput name='name' id="input-gray" disabled defaultValue={name} type='text' required color="gray"/>
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="input-gray" color="gray" value="Food image url:" />
                                </div>
                                <TextInput name='image' id="input-gray" type='text' defaultValue={image} disabled required color="gray"/>
                                </div>
                                
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="input-gray" color="gray" value="Food ID:" />
                                </div>
                                <TextInput name='id' id="input-gray" type='text' defaultValue={_id} disabled required color="gray"/>
                            </div>
                                
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="input-gray" color="gray" value="Donor Email:" />
                                </div>
                                <TextInput name='donorEmail' id="input-gray" type='text' defaultValue={donorEmail} disabled required color="gray"/>
                            </div>
                                    
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="input-gray" color="gray" value="Donor Name:" />
                                </div>
                                <TextInput name='donorName' id="input-gray" type='text' defaultValue={donorName} disabled required color="gray"/>
                            </div>
                                    
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="input-gray" color="gray" value="User Email:" />
                                </div>
                                <TextInput name='userEmail' id="input-gray" type='text' defaultValue={userEmail} disabled required color="gray"/>
                            </div>
                                
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="input-gray" color="gray" value="Request Date:" />
                                </div>
                                <TextInput name='RequestDate' id="input-gray" type='text' defaultValue={new Date().toLocaleString()} disabled required color="gray"/>
                            </div>
                                    
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="input-gray" color="gray" value="Pickup Location:" />
                                </div>
                                <TextInput name='location' id="input-gray" type='text' defaultValue={location} disabled required color="gray"/>
                            </div>
                                
                                        
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="input-gray" color="gray" value="Expire Date:" />
                                </div>
                                <TextInput name='expireDate' id="input-gray" type='text' defaultValue={expireDate} disabled required color="gray"/>
                            </div>
                                
                                        
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="input-gray" color="gray" value="Additional Note:" />
                                </div>
                                <TextInput name='notes1' id="input-gray" type='text' placeholder="Enter a note shortly" required color="gray"/>
                            </div>
                                
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="input-gray" color="gray" value="Donation Money:" />
                                </div>
                                <TextInput name='donation' id="input-gray" type='text' placeholder="Enter your donation" required color="gray"/>
                            </div>
                            
                            

                            <button  name='submit' className='w-full h-full text-white bg-[#0E7490] py-2 mt-3 rounded-lg'>Request</button>
                        </form>
                                    
                        </Modal.Body>
                    </Modal>

                    {/* Modal end here */}
                </div>
            </div>
        </section>
    );
};

export default SingleFood;