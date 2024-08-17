    import { ToastContainer } from "react-toastify";


    const UseMyToast = () => {


    return (
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    );
    };

    export default UseMyToast;
