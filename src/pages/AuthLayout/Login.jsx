import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { useSnackbar } from "notistack";
import GoogleLogin from "../../hooks/GoogleLogin";

const Login = () => {
    const {userLogin, setUser} = UseAuth();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const location = useLocation();
    console.log('state in the location login page', location.state)
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)

        // login
        userLogin(email, password)
        .then(result => {
            setUser(result.user);
            console.log(result.user)
            e.target.reset();
            enqueueSnackbar('The user login has been successfully.', {variant: 'success',});
            navigate(from, { replace: true });
        })
        .catch((error) => {
            enqueueSnackbar('Login failed. Please check your credentials and try again!', {variant: 'error',autoHideDuration: 5000,
            });
          })
    }

    // google 
    return (
        <div className="min-h-screen px-4 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-secondary dark:text-white">
                    Login
                </h2>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-base font-medium text-secondary dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-base font-medium text-secondary dark:text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="border-t border-gray-300 dark:border-white flex-grow"></div>
                    <span className="mx-2 text-sm text-gray-400">or</span>
                    <div className="border-t border-gray-300 dark:border-white flex-grow"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="flex items-center space-x-4">
                        {/* google */}
                        <GoogleLogin></GoogleLogin>
                    <button
                        //   onClick={handleGithubLogin}
                        className="w-full py-2 px-4 flex items-center justify-center text-secondary font-semibold rounded-lg border-primary border-2  focus:outline-none focus:ring-2 focus:ring-primary dark:text-white focus:ring-offset-2"
                    >
                        <img
                            src="https://i.ibb.co/SXZGcCv/image.png"
                            alt="GitHub logo"
                            className="h-5 w-5 mr-2"
                        />
                        GitHub
                    </button>
                </div>
                <div>
                    <p className='text-center text-sm mt-4 md:text-lg ml-8'><span className='text-black opacity-60'>Don't have an account?</span> <Link to='/register' className='text-blue-500 hover:underline'>Register here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;