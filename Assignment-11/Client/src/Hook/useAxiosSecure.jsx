import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/ContextComponent";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL:'https://volunteer-hub-beryl.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=> {
        axiosSecure.interceptors.response.use(res=> {
            return res
        }, error => {
            console.log("error tracked in the interceptor",error.response)
            if(error.response.status === 401 || error.response.status === 403){
                // console.log("log out the user")
                logOut()
                navigate("/login")
                // logOut()
                // .then(()=>{
                //     navigate("/login")
                // })
                // .catch(error => console.log(error))
            }
        })
    },[logOut,navigate])


    return axiosSecure;
};

export default useAxiosSecure;