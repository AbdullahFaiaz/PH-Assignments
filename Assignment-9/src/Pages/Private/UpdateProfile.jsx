import { useContext, useState } from "react";
import { AuthContext } from "../../Context/ContextComponent";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import useMyToast from "../../Hooks/useMyToast";
import UseMyToast from "../../Components/UseMyToast";
import { toast,ToastContainer, } from 'react-toastify';
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user,updateUserProfilePage } = useContext(AuthContext);

  //show pass
const [showPass,setShowPass] = useState(false)
const handleShowPass =(e)=>{
    e.preventDefault()
    setShowPass(!showPass)
}
  //react hook form
      const {register,handleSubmit,formState: { errors },} = useForm()
  //on submit
      const onSubmit = (data) => {
          const {photoURL,displayName} = data
          //update profile
          toast("Updating Profile.....")
          setTimeout(()=>{
            updateUserProfilePage(displayName,photoURL)
          },2000)

        
      }
  
  //toast
  const Toast = useMyToast()
  Toast("Registered Successfully and the page is going to reload in 3 seconds")
  
  return (
    <div>
            <Helmet>
                <title>Harmony Homes | Update Profile</title>
            </Helmet>
      <UseMyToast/>
      <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

<ToastContainer />
<div className="py-[3vw] flex justify-center items-center bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-2/3 lg:w-1/2">
        <div className="text-center mb-8">
            <img
                src={user?.photoURL || 'https://via.placeholder.com/150'}
                alt="User Avatar"
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-3xl font-semibold text-gray-800">{user?.displayName || "User name not found"}</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="form-control">
                <label className="label text-gray-700">Name (editable)</label>
                <input
                    type="text"
                    defaultValue={user?.displayName || "User name not found"}
                    name="name"
                    className="input input-bordered w-full bg-gray-200 focus:outline-none focus:ring focus:ring-black"
                    {...register("displayName", { required: true })}
                />
                {errors.displayName && (
                    <span className="text-red-500 text-sm">This field is required</span>
                )}
            </div>

            <div className="form-control">
                <label className="label text-gray-700">Photo URL (editable)</label>
                <input
                    type="text"
                    placeholder="Photo URL"
                    name="photo"
                    className="input input-bordered w-full bg-gray-200 focus:outline-none focus:ring focus:ring-black"
                    defaultValue={user?.photoURL || "Photo URL not found"}
                    {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                    <span className="text-red-500 text-sm">This field is required</span>
                )}
            </div>

            <div className="form-control">
                <label className="label text-gray-700">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered w-full bg-gray-200 focus:outline-none"
                    defaultValue={user?.email || "Email not found"}
                    {...register("email", { required: true })}
                    readOnly
                />
                {errors.email && (
                    <span className="text-red-500 text-sm">This field is required</span>
                )}
            </div>

            <div className="form-control">
                <label className="label text-gray-700">Password</label>
                <div className="relative">
                    <input
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        className="input input-bordered w-full bg-gray-200 focus:outline-none"
                        defaultValue={user?.password || "Password not found"}
                        {...register("password", { required: true })}
                        readOnly
                    />
                    <button
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
                        onClick={handleShowPass}
                    >
                        {showPass ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                    </button>
                </div>
                {errors.password && (
                    <span className="text-red-500 text-sm">This field is required</span>
                )}
            </div>

            <div className="form-control">
            <button className="btn bg-gray-700 hover:bg-black w-full text-white py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
    Update Profile
</button>

            </div>
        </form>

        <div className="flex items-center justify-center mt-6">
            <Link to={"/"}>
                <button className="btn px-4 py-2 rounded-lg hover:bg-black hover:scale-105 hover:text-white">
                    Go to Home
                </button>
            </Link>
        </div>
    </div>
</div>

    </div>
  );
};

export default UpdateProfile;