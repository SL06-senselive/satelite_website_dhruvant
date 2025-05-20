import { Link } from "react-router-dom";


const NavButton = ({ to, children }) => (
  <Link
    to={to}
    className="inline-block px-6 py-3 text-lg bg-senseLive-teal hover:bg-senseLive-darkTeal text-white font-medium rounded-lg cursor-pointer"
    onClick={() => console.log('NavButton clicked!')}
  >
    {children}
  </Link>
);

export default NavButton;


