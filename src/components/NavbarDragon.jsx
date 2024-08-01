import { Navbar, NavLink, Button } from "my-frontend-lib";
import Logo from "./Logo";

function NavbarDragon() {
  return (
    <Navbar className="bg-white shadow-md">
      <div className="flex items-center justify-between w-full">
        <div className="flex-shrink-0">
          <Logo width={32} height={32} color="#2b2d42" className="h-8 w-auto" />
        </div>
        <div className="flex space-x-4">
          <NavLink></NavLink>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => console.log("Login clicked")}
            className="bg-white p-1 hover:bg-primary hover:text-white transition-colors duration-300"
            textColor="text"
          >
            Login
          </Button>
          <Button
            onClick={() => console.log("Sign up clicked")}
            className=" bg-white p-1 hover:bg-secondary hover:text-white transition-colors duration-300"
            textColor="text"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarDragon;
