import { Card ,Button} from "flowbite-react";
import { MdLocationPin } from "react-icons/md";
import { FcExpired } from "react-icons/fc";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Food = ({ food }) => {
    const navigate = useNavigate();
    
    const{_id,name,image,quantity,location,expireDate,notes,donorName,donorEmail,donorImage,status}=food
    return (
        <Card className="md:max-w-sm mx-auto w-full" renderImage={() => <img className="h-52" src={image}></img>}>
            <div className=" flex flex-col gap-1 text-sm">
                <h1 className="text-xl text-Primary font-semibold ">{name}</h1>
                {/* <p>{ notes}</p> */}
                <p className="text-base  text-gray-600">Quntity: <span className="text-Secondary text-sm">{quantity} perosn can feed</span></p>
                {/* <p className="text-xs font-semibold">Status: <span className="text-green-500">{ status}</span></p> */}

                <h1 className={`mt-2 text-xs font-semibold ${status === 'Delivered' ? 'text-orange-600' : 'text-green-600'}`}>
                        <span className={`text-base text-Accent `}>Status:</span> {status}
                </h1>
                <div className="flex justify-between items-center mt-2">
                    <p className="flex items-center"> <MdLocationPin className="text-xl text-orange-300"></MdLocationPin>{location}</p>
                    <div className="flex items-center">
                        <FcExpired className="text-2xl"></FcExpired>
                        <p>{ expireDate}</p>
                    </div>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center gap-1">
                        <img className="h-8 rounded-full" src={donorImage} alt="" />
                        <h2 className="text-base text-gray-600 font-semibold">{ donorName}</h2>
                    </div>
                    <Link to={`/singleFood/${ _id}`}>
                        <button className="p-1 rounded hover:bg-gray-200 px-4 border-2">Details</button>
                    </Link>
                        
                    
                </div>
            </div>
        </Card>
    );
};

export default Food;