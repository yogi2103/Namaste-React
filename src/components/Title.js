export const Title = () => (
  <a>
    <img
      className="logo"
      alt="logo"
      src="https://scontent.fmaa1-2.fna.fbcdn.net/v/t39.30808-6/302275887_487537640050648_5998956273504369200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HX1oGrcuJ6kAX-Evz0s&_nc_ht=scontent.fmaa1-2.fna&oh=00_AfDAh3StdZO0YBerhu18sxNAv_m0hEQ3HdbvxbYG9YSlUw&oe=63C6AA2E"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
