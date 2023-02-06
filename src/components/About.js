import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";  

class About extends React.Component{
    constructor(props){
        console.log("parent- constructor");
        super(props);
    }

    componentDidMount(){
       this.timer = setInterval(()=>{
            console.log("hello");
        },1000)
        //best place to make an api call (because we want the api to be called after render)
        console.log("parent component did mount");
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Component will unmount");
    }


    render(){
        console.log("parent render");
         return(
            <div>
        <h1>About us Page</h1>
        <p>
            {" "}
            Chalo bhai!!!
        </p>
        {/* <Profile name={"First Child"} /> */}
        {/* <ProfileFunctionalComponent name={"First child"} /> */}
         <Outlet /> 
    </div>
         )
    }
}

export default About;