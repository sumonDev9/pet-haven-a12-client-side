import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

export const axiosSecure = axios.create({
   
    baseURL: 'https://pet-adoption-platform-sever-side.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {userLogout} = UseAuth();

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors before adding token', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function(error){
        return Promise.reject(error)
    })

     // intercepts 401 and  403 status
     axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptor', status)
        // for 401 or 403 logout the user and move the user to the login 
        if(status === 401 || status === 403){
            await userLogout();
            navigate('/login')
        }
        return Promise.project(error);
    })

    return axiosSecure
};

export default useAxiosSecure;