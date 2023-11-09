import { useLoaderData } from "react-router-dom";
import { BsSortDownAlt ,BsSearch} from "react-icons/bs";
import Food from "./Food";
import { TextInput ,Label} from "flowbite-react";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AvailableFood = () => {

    const availableFood = useLoaderData();
    const [displayData, setDisplayData] = useState(availableFood)
    const [searchText, setSearchText] = useState("");

    const handleSort = () => {
        const sortData=[...displayData]
        sortData.sort((a, b) => {
            const dateA = new Date(a.expireDate);
            const dateB = new Date(b.expireDate);
            return dateA - dateB;
        })
        setDisplayData(sortData)
    }

    const handleSearch = () => {
        if (searchText === "") {
            setDisplayData(availableFood)
        }
        else {
            const filteredData = availableFood.filter(food => {
                const foodName = food.name.toLowerCase();
                const search = searchText.toLowerCase();
                return foodName.includes(search);
              });
              setDisplayData(filteredData);
        }
    }
    
    return (

        <section className="bg-gray-100">
            <Helmet>
                <title>Surplus Sustain || Available Food</title>
            </Helmet>
            <section className="max-w-screen-xl mx-auto py-8 md:py-14 md:px-2">
                <h1 className="text-3xl md:text-4xl mb-4 text-center text-Primary font-semibold font-lobster">
                        Explore Available Foods
                </h1>
                <p className=" md:text-2xl mb-4 text-center text-Secondary font-semibold ">Discover a Variety of Delicious and Nutritious Meals Shared by the Community</p>
                
                <section className="max-w-screen-xl mx-auto  my-8 p-2 py-4 flex justify-between items-center bg-white">
                    <div className="flex gap-1 items-center">
                        <button onClick={handleSort}>
                            <BsSortDownAlt className="text-4xl"></BsSortDownAlt>
                        </button>
                        
                        <p className="flex gap-2">Sort <span className="hidden md:block">by expire date</span></p>
                    </div>

                    <div className="relative w-2/3 flex justify-end">
                        <input onChange={(e) => setSearchText(e.target.value)}  type="text" name="searchText" placeholder="Search here by Food name" className="w-full rounded-lg md:w-3/4 lg:w-3/5 border-2 p-2" id="" />
                        <button onClick={handleSearch} className="absolute z-30 text-xl top-0 w-12 lg:w-16 h-full border-2 right-0 bg-gray-200"><BsSearch className="text-xl mx-auto"></BsSearch></button>
                        
                    </div>
                    

                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 ">
                    {
                        displayData.map((food,idx)=><Food key={idx} food={food}></Food>)
                    }
                </section>
            </section>
        </section>
    );
};

export default AvailableFood;