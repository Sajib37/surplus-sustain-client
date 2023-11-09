import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import RequesterInfo from './RequesterInfo';
import axios from 'axios';

const ManageSingleFood = () => {

    const { id } = useParams()
    const request = useLoaderData()
    
    
    const [food, setFood] = useState(null)
    const [status1, setStatus1] = useState(null);
    const [foodImage, setFoodImage] = useState(null);
    const[foosName ,setFoodName]=useState(null)
    
    useEffect(() => {
        axios.get(`http://localhost:5000/singleFood/${id}`)
            .then(result => {
                setFood(result.data)
            })
            .catch(error => {
            console.log(error)
        })
        
    }, [])

    useEffect(() => {
        if (food) {
            const { status, image,name } = food[0];
            setStatus1(status);
            setFoodImage(image);
            setFoodName(name)
        }
    }, [food]);


    
    
    

    return (
        <section className="bg-gray-100 py-8 md:py-14">
            <ToastContainer></ToastContainer>
            <section className="max-w-screen-xl mx-auto py-4 bg-white mb-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-Primary font-bold">Manage your <span className='text-Secondary'>{ foosName}</span></h1>
            </section>
            <section className='max-w-screen-xl mx-auto'>
                <div className='lg:w-4/5 w-full mx-auto'>
                    <img className='w-full md:h-80 lg:h-96' src={foodImage} alt="" />
                </div>
            </section>

            <section className='max-w-screen-xl mx-auto mt-8 lg:mt-12 py-6 md:py-8'>
                {
                    request.length!==0 ?
                        <div className=''>
                            <h1 className="text-2xl md:text-3xl mb-6 md:mb-8 lg:text-4xl text-center text-Secondary font-bold">All Requesters Information</h1>
                            <div className='grid lg:grid-cols-3 gap-2 md:gap-4'>
                                {
                                    request.map((requester,index)=><RequesterInfo key={index} food={food} status1={status1} requester={requester} ></RequesterInfo>)
                                }
                            </div>
                        </div>
                        : <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-Secondary font-bold"><span className='text-3xl md:text-4xl lg:text-5xl text-orange-500' >Opps!</span> There is No Consumer request for your food</h1>
                }

            </section>
        </section>
    );
};

export default ManageSingleFood;