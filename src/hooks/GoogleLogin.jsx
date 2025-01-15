import { useSnackbar } from 'notistack';
import UseAuth from './UseAuth';

const GoogleLogin = () => {
    const {logInbyGoogle} = UseAuth();
    const { enqueueSnackbar } = useSnackbar();

    const handleGoogleLogin = () => {
        alert("user ")
        logInbyGoogle()
        .then(result => {
            console.log(result.user)
            enqueueSnackbar('The user login has been successfully.', {
                variant: 'success',
                autoHideDuration: 3000,
            })
        })
   
        .catch((error) => {
            enqueueSnackbar('Login failed! Please check your credentials and try again.', {
                variant: 'error',
                autoHideDuration: 5000,
            });
        });
    }

    return (
        <button
            onClick={handleGoogleLogin}
            className="w-full py-2 px-4 flex items-center justify-center text-secondary font-semibold rounded-lg border-primary border-2 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white focus:ring-offset-2"
        >
            <img
                src="https://i.ibb.co/TcB5YZK/icons8-google-48.png"
                alt="Google logo"
                className="h-5 w-5 mr-2"
            />
            Google
        </button>
    );
};

export default GoogleLogin;