import { Component } from "react";
import { NavLink } from "react-router-dom";
import UserImage from "./../../assets/user.png";

export default class Header extends Component {
  render() {
    const activeLink = "border-b-2 cursor-pointer";
    const normalLink = "cursor-pointer";

    return (
      <div className="bg-accent-navy-200 h-20 w-full text-white fixed top-0 p-4">
        <div className="w-full h-full">
          <div className="flex w-full h-full items-center">
            <div className="w-1/3">
             <h1 className="mb-4">Magazine</h1>
            </div>
            <div className="w-full">
              <nav className="flex w-full justify-between font-heading">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>


                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Sport
                </NavLink>


                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Art
                </NavLink>
               
                <NavLink
                  to={"/art"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Beauty
                </NavLink>

                <NavLink
                  to={"/Beauty"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Travel
                </NavLink>


                 <NavLink
                  to={"/Healthy"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Technology
                </NavLink>


                 <NavLink
                  to={"/Technology"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Healthy
                </NavLink>

                <NavLink
                  to={"/Music"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Contact
                </NavLink>


                <NavLink to={"/profile"}>
                  <img src={UserImage} alt="userImage" className="w-10 h-10 ms-1" />
                </NavLink>

              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
