import { useEffect, useState } from "react";

const useOnline = () =>{
    const [isOnline, setIsOnline]=useState(true);

    useEffect(()=>{
        const handleOnline=()=>{
            setIsOnline(true);
        }
        window.addEventListener("online", handleOnline);

        const handleOffline=()=>{
            setIsOnline(false);
        }
        window.addEventListener("offline", handleOffline);

        return ()=>{        //clean up work(we're removing it if we go to any other page)
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    },[])

    return isOnline;      //true or false
}

export default useOnline;