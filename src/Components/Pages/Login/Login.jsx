import { Label, TextInput,Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsGoogle } from "react-icons/bs";
import { useAuth } from '../../AuthProvider/AuthProvider';



const Login = () => {

    const {googleLogin}=useAuth()


    const handleGooglLogin = () => {
        googleLogin()
            .then(result => console.log(result))
            .catch(error => console.log(error))
        
    }


    return (
        <div className="bg-gray-200 md:bg-gray-100 py-8 md:py-12 px-2">
            <section className="max-w-md  mx-auto px-2 md:px-4  md:max-w-lg lg:max-w-lg bg-white rounded-lg py-10 md:py-12">
                <h1 className="text-2xl md:text-3xl mb-4 text-center text-Primary font-semibold">
                    Login to your account
                </h1>

                {/* Form starts here */}
                <form action="">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" value="Email:" />
                        </div>
                        <TextInput name='email' id="input-gray" placeholder="Enter your Email" type='email' required color="gray"/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" value="password:" />
                        </div>
                        <TextInput name='password' id="input-gray" type='password' placeholder="Enter your password" required color="gray"/>
                    </div>
                    <p className="text-base text-orange-500 mt-2">Forgot Password?</p>
                    <Button name='submit' className='w-full mt-4'>Login</Button>
                </form>

                <Button onClick={handleGooglLogin} color="success" className='w-full mt-2'><BsGoogle className="text-xl mr-2"></BsGoogle> Login With Google</Button>
                <p className="font-ubuntu font-medium mt-4">Don't have an account? Please, <Link className="text-Secondary " to='/register'>Register</Link></p>

            </section>
        </div>
    );
};

export default Login;
