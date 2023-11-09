import { Link } from 'react-router-dom';
import error from '../../../assets/error.jpg'

import { Button } from 'flowbite-react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div className='max-w-screen-xl  mx-auto h-[100vh] flex items-center flex-col md:flex-row px-2'>
            <Helmet>
                <title>Surplus Sustain || Error Page</title>
            </Helmet>
            <div className='md:w-1/2'>
                <img className='w-full' src={error} alt="" />
            </div>
            <div className='md:w-1/2 md:space-y-4 space-y-2 text-center md:text-start'>
                <h1 className='text-4xl md:text-5xl font-serif font-bold'><span className=''>There is</span><br /> <span className='text-yellow-500'>Nothing</span> here</h1>
                <p className='md:text-lg font-semibold text-gray-600'>This is not the page you're looking for. Please check the URL and try again, or contact our support team for assistance.</p>
                <Button color="warning" className='mx-auto md:mx-0 text-black'><Link to='/'>Go back home</Link></Button>
            </div>
        </div>
    );
};

export default ErrorPage;