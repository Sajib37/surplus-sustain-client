import { useEffect, useState } from "react";
import { useAuth } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { AiFillDelete ,AiFillEdit ,AiOutlineFileAdd } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


const ManageFood = () => {
    const [email, setEmail] = useState(null);
    const [myFood, setMyFood] = useState(null);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setEmail(user.email);
            axios
                .get(`http://localhost:5000/manageFood/${user.email}`)
                .then((response) => {
                    setMyFood(response.data); // Assuming the data is in the 'data' property of the response
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [user]);


    const handleDelet = (id) => {
        Swal.fire({
            title: "Are you sure ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/food/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            setMyFood(myFood.filter((food) => food._id !== id));
                            Swal.fire(
                                "Deleted!",
                                "Your Food has been deleted.",
                                "success"
                            );
                        }
                    });
            }
        });
        
    }

    const handleUpdate = (id) => {
        navigate(`/updateFood/${id}`)
    }

    const handleManage = (id) => {
        navigate(`/manage/singleFood/${id}`)
    }

    return (
        <section className=" bg-gray-100 py-8 md:py-12 ">
            <ToastContainer></ToastContainer>
            {
                myFood ? 
                    <div>
                        <section className="max-w-screen-xl mx-auto px-2 py-4 bg-white mb-6 md:mb-12">
                            {
                                (myFood.length===0)?
                                <h1 className="text-xl md:text-3xl text-center text-Primary font-bold">Explore the table below to see your added foods.</h1>
                                : <h1 className="text-xl md:text-3xl text-center text-Primary font-bold">Explore the table below to see your added foods.</h1>
                            }
                        
                        </section>
                        <section className="max-w-screen-xl mx-auto px-1 md:px-2">
                            <table className="border border-collapse  mx-auto">
                                <thead>
                                    <tr>
                                        <th className="border text-xs md:text-lg text-Primary border-gray-400 py-2 md:p-2 w-1/4">Name</th>
                                        <th className="border text-xs md:text-lg text-Primary border-gray-400 py-2 md:p-2 w-1/4">Status</th>
                                        <th className="border text-xs md:text-lg text-Primary border-gray-400 py-2 md:p-2 w-1/4">Manage</th>
                                        <th className="border text-xs md:text-lg text-Primary border-gray-400 py-2 md:p-2 w-1/4">Edit</th>
                                        <th className="border text-xs md:text-lg text-Primary border-gray-400 py-2 md:p-2 w-1/4">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myFood.map((food, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                                            <td className="border text-xs md:text-base border-gray-400 py-2 md:p-2 w-1/4 text-center">{food.name}</td>
                                            <td className={`border border-gray-400 md:p-2 w-1/4 text-xs py-2 md:text-base text-center ${
                                                food.status === 'Delivered' ? 'text-red-500' : 'text-green-500'
                                                }`}>
                                                {food.status}
                                            </td>

                                            <td   className="border text-Secondary border-gray-400 py-2 md:p-2 w-1/4 "><AiOutlineFileAdd onClick={()=>handleManage(food._id)} className="text-xl mx-auto hover:cursor-pointer"></AiOutlineFileAdd></td>
                                            <td  className="border border-gray-400 py-2 md:p-2 w-1/4">
                                                <AiFillEdit onClick={()=>handleUpdate(food._id)} className="text-Primary mx-auto text-lg md:text-xl hover:cursor-pointer" />
                                            </td>
                                            <td  className="border border-gray-400 py-2 md:p-2 w-1/4">
                                                <AiFillDelete onClick={()=>handleDelet(food._id)} className="text-orange-600 text-lg md:text-xl mx-auto hover:cursor-pointer" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </div>

                    :
                    <div className="text-center">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
            }
        </section>
    );
};

export default ManageFood;
