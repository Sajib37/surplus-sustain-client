import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const Food = useLoaderData();
    console.log(Food)
    return (
        <div>
            <h1>Single Food page</h1>
        </div>
    );
};

export default SingleFood;