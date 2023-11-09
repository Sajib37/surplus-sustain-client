import React, { useEffect, useState } from 'react';
import { BiTime } from "react-icons/bi";
import { Button } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';

const RequesterInfo = ({ requester,status1, food }) => {
    const { _id, foodID, userEmail, userName, userPhoto, requestDate, donation } = requester;
    const [foodStatus, setFoodStatus] = useState(null);

    useEffect(() => {
        if (food) {
            const { status } = food[0];
            setFoodStatus(status);
        }
    },[food])
    

    const handleDeliver = () => {
        setFoodStatus('Delivered');
        
        if (food) {
            const { name, quantity, expireDate, location, notes, image } = food[0];
            const updatedFood = {
                status: 'Delivered',
                name,
                quantity,
                expireDate,
                location,
                notes,
                image,
            };

            fetch(`http://localhost:5000/food/update/${foodID}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updatedFood),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        toast.success("Your Food is Delivered!");
                    } else {
                        toast.error("Delivery Failed!");
                    }
                });
        }
    };

    return (
        <div className='w-full md:w-2/3 md:mx-auto lg:w-full bg-white max-h-40 border border-gray-300 flex'>
            <div className='w-1/4'>
                <img className='w-full h-full' src={userPhoto} alt="Requested person" />
            </div>
            <ToastContainer></ToastContainer>
            <div className='w-3/4 px-2 md:px-4 py-2'>
                <h1 className='text-xl text-Accent font-semibold'>{userName}</h1>
                <h1 className='text-Accent font-semibold text-sm hover:text-green-800'>{userEmail}</h1>
                <p className='text-xs font-semibold '>Donation: <span className='text-green-500'>{donation} $</span></p>
                <h1 className='flex items-center gap-1 text-sm'><BiTime className='text-2xl text-Secondary'></BiTime> {requestDate}</h1>
                <div className='flex justify-between'>
                    <h1 className={`mt-2 text-sm font-semibold ${foodStatus === 'Delivered' ? 'text-orange-600' : 'text-green-600'}`}>
                        <span className={`text-base text-Accent`}>Status:</span> {foodStatus}
                    </h1>
                    {foodStatus !== 'Delivered' ? (
                        <Button onClick={handleDeliver} color="light">Deliver</Button>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default RequesterInfo;
