import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        //Create state over here
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "somewhere in somewhere"
            },
            count: 0
        }
        console.log("Constructor inside Profile class" + this.props.name); 
    }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/yogi2103");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })

        console.log("ComponentDidMount inside Profile class" + this.props.name);
    }

     render(){
        console.log("render inside Profile class" + this.props.name);
        return(
            <div>
                <h1>Profile Class Component</h1>
                <h3>{this.props.name}</h3>
                <h3>{this.state.count}</h3>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Increase Count</button>
                <button onClick={()=>this.setState({count:this.state.count-1})}>Decrease Count</button>
                <h2>Name: {this.state.userInfo.name}</h2> 
                <img src= {this.state.userInfo.avatar_url} /> 
                <h2>Location: {this.state.userInfo.location}</h2>
            </div>
        ) 
     }
}

export default Profile; 