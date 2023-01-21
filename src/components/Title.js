import { useState } from "react";
import {Link} from "react-router-dom";

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://scontent.fmaa1-3.fna.fbcdn.net/v/t1.6435-9/42363058_705633156437194_4559411327222677504_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2Wwt0pMntGIAX8GrXiR&_nc_oc=AQmrU4rKlD-eS4LZhvWbk4KBJuWo5RXgD_nwlwwvUJfk2VM3bB7tsAFjf1lhXsQnr7A&_nc_ht=scontent.fmaa1-3.fna&oh=00_AfDCEq8TD1pfimTFNBAWj05G5NhSfnowfs0jLEg3XnCXEQ&oe=63F07C2F"
    />
  </a>
);

// const isLoggedIn = () => {
//   return true;
// }

const Header = () => {


const [isLoggedIn, setIsloggedIn]=useState(false)

  console.log("   itle rendering");
  const [title, setTitle] = useState("Food villa");
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button onClick={() => setTitle("Jhakas")}>Change title</button>
      <div className="nav-items">
        <ul>
          <li> <Link to="/">Home </Link></li>  {/* Client Side Rendering*/}
          <li> <Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
     {isLoggedIn?<button onClick={()=>setIsloggedIn(false)}>Logout</button>:<button onClick={()=>setIsloggedIn(true)}>Login</button>}
    </div>
  );
};

export default Header;
