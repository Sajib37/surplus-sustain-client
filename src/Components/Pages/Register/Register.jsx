import { Label, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const { googleLogin, createUser } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                toast.success(
                    `Welcome ${result?.user?.displayName} .Login successful`
                );
            })
            .catch((error) => {
                toast.error("Login Failed.!");
            });
    };
    // const handleRegister = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const confirmPassword = form.confirmPassword.value;

    //     if (password !== confirmPassword) {
    //         toast.error(`Passwords do not match.`);
    //         return;
    //     } else if (password.length < 6) {
    //         toast.error("password must be at least six character");
    //         return;
    //     } else if (!/[A-Z]/.test(password)) {
    //         toast.error("password must be contain Upper Case");
    //         return;
    //     } else if (!/[a-z]/.test(password)) {
    //         toast.error("password must be contain Lower Case");
    //         return;
    //     } else if (!/\d/.test(password)) {
    //         toast.error("password must be contain a number");
    //         return;
    //     } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
    //         toast.error("password must be contain a special Character");
    //         return;
    //     } else {
    //         createUser(email, password)
    //             .then(async (result) => {
    //                 toast.success("Account created successfully");
    //                 await new Promise((resolve) => setTimeout(resolve, 1000));
    //                 navigate("/login");
    //             })
    //             .catch((error) => {
    //                 if (
    //                     error ==
    //                     `FirebaseError: Firebase: Error (auth/email-already-in-use).`
    //                 ) {
    //                     toast.error("Your Email already in use.");
    //                 } else {
    //                     toast.error("Account created Failed!");
    //                 }
    //             });
    //     }
    // };

    return (
        <div className="bg-gray-200 md:bg-gray-100 py-8 md:py-12 px-2">
            <section className="max-w-md  mx-auto px-2 md:px-4  md:max-w-lg lg:max-w-lg bg-white rounded-lg py-10 md:py-12">
                <h1 className="text-2xl md:text-3xl mb-4 text-center text-Primary font-semibold">
                    Create a new account
                </h1>

                {/* Form starts here */}
                <form action="" >
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input-gray"
                                color="gray"
                                value="Name:"
                            />
                        </div>
                        <TextInput
                            name="name"
                            id="input-gray"
                            placeholder="Enter your Name"
                            type="text"
                            required
                            color="gray"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input-gray"
                                color="gray"
                                value="Photo url:"
                            />
                        </div>
                        <TextInput
                            name="photo"
                            id="input-gray"
                            placeholder="Enter your Photo URL"
                            type="text"
                            required
                            color="gray"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input-gray"
                                color="gray"
                                value="Email:"
                            />
                        </div>
                        <TextInput
                            name="email"
                            id="input-gray"
                            placeholder="Enter your Email"
                            type="email"
                            required
                            color="gray"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input-gray"
                                color="gray"
                                value="Password:"
                            />
                        </div>
                        <TextInput
                            name="password"
                            id="input-gray"
                            type="password"
                            placeholder="Enter your password"
                            required
                            color="gray"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="input-gray"
                                color="gray"
                                value="Confirm password:"
                            />
                        </div>
                        <TextInput
                            name="confirmPassword"
                            id="input-gray"
                            type="password"
                            placeholder="Repeat your password"
                            required
                            color="gray"
                        />
                    </div>
                    <button
                        name="submit"
                        className="w-full h-full mt-2 text-white bg-[#0E7490] py-2 rounded-lg"
                    >
                        Register
                    </button>
                </form>

                <Button
                    onClick={handleGoogleLogin}
                    color="success"
                    className="w-full mt-2"
                >
                    <BsGoogle className="text-xl mr-2"></BsGoogle> Login With
                    Google
                </Button>
                <p className="font-ubuntu font-medium mt-4">
                    Already have an account? Please,{" "}
                    <Link className="text-Secondary " to="/login">
                        Login
                    </Link>
                </p>

                <ToastContainer></ToastContainer>
            </section>
        </div>
    );
};

export default Register;
