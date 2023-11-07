import { Label, TextInput,Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsGoogle } from "react-icons/bs";
import { useAuth } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';



const Login = () => {

    const {googleLogin,emailLogin,user,resetPassword}=useAuth()
    const emailRef = useRef();

    const handleGooglLogin = () => {
        googleLogin()
            .then(result => {
                toast.success(`Welcome ${result?.user?.displayName} .Login successful`)
                // console.log(user)
            })
            .catch(error => {
                toast.error('Login Failed.!')
            })
        
    }

    const handleEmailLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email,password})

        emailLogin(email, password)
            .then(result => {
                toast.success('Login SuccessFull')
                form.reset();
            })
            .catch(error => {
                toast.error('Login Failed.Please ,Try again')
        })
    }


    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast.error("Plaese,At first Enter your email.!")
        }
        else {
            resetPassword(email)
                .then(result => {
                toast.success('Please, Check your Email for new password')
            })
        }
    }


    return (
        <div className="bg-gray-200 md:bg-gray-100 py-8 md:py-12 px-2">
            <section className="max-w-md  mx-auto px-2 md:px-4  md:max-w-lg lg:max-w-lg bg-white rounded-lg py-10 md:py-12">
                <h1 className="text-2xl md:text-3xl mb-4 text-center text-Primary font-semibold">
                    Login to your account
                </h1>

                {/* Form starts here */}
                <form action="" onSubmit={handleEmailLogin}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" value="Email:" />
                        </div>
                        <TextInput ref={emailRef} name='email' id="input-gray" placeholder="Enter your Email" type='email' required color="gray"/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="input-gray" color="gray" value="password:" />
                        </div>
                        <TextInput name='password' id="input-gray" type='password' placeholder="Enter your password" required color="gray"/>
                    </div>
                    <p onClick={handleResetPassword} className="text-base text-orange-500 my-2 hover:cursor-pointer hover:text-Primary">Forgot Password?</p>
                    <button name='submit' className='w-full h-full text-white bg-[#0E7490] py-2 rounded-lg'>Login</button>
                </form>

                <Button onClick={handleGooglLogin} color="success" className='w-full mt-2'><BsGoogle className="text-xl mr-2"></BsGoogle> Login With Google</Button>
                <p className="font-ubuntu font-medium mt-4">Don't have an account? Please, <Link className="text-Secondary " to='/register'>Register</Link></p>
                <ToastContainer></ToastContainer>
            </section>
        </div>
    );
};

export default Login;
