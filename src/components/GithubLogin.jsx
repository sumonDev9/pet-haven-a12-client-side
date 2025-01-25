import { useSnackbar } from "notistack";
import UseAuth from "../hooks/UseAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const GithubLogin = () => {

 const {logInbyGithub} = UseAuth();
 const { enqueueSnackbar } = useSnackbar();
 const axiosPublic = useAxiosPublic();
 const navigate = useNavigate();

 const handleGithubLogin = () => {
    logInbyGithub()
    .then(result => {
        console.log(result.user);
        enqueueSnackbar(`${result.user?.displayName} login has been successfully.`, {
            variant: 'success',
            autoHideDuration: 1000,
        })
        navigate('/')
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
            onClick={handleGithubLogin}
            className="w-full py-2 px-4 flex items-center justify-center text-secondary font-semibold rounded-lg border-primary border-2  focus:outline-none focus:ring-2 focus:ring-primary dark:text-white focus:ring-offset-2"
        >
            <img
                src="https://i.ibb.co/SXZGcCv/image.png"
                alt="GitHub logo"
                className="h-5 w-5 mr-2"
            />
            GitHub
        </button>
    );
};

export default GithubLogin;