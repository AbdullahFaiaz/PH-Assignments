import { useContext, useEffect } from "react";
import { toast,Slide } from "react-toastify";
import { AuthContext } from "../Context/ContextComponent";

const useMyToast = (Message) => {
    
    const { showToast, setShowToast } = useContext(AuthContext);
    useEffect(() => {
        if (showToast) {
            toast(Message, {
                transition: Slide,
                });
        setShowToast(false);
        console.log(showToast);
        }
    }, [showToast, setShowToast, Message]);

return useMyToast;
};
export default useMyToast;
