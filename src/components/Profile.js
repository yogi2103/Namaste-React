import { useEffect, useState } from "react";

const Profile = (props) =>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("API called inside profile.js");
        return () =>{
            console.log("useEffect return!");
        }
    })
    console.log("render inside Profile.js");
    return (
        <div>
            <h2>Profile Component!</h2>
            <h3>{props.name}</h3>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            <button onClick={()=>setCount(count-1)}>Decrease Count</button>
        </div>
    )
}

export default Profile;