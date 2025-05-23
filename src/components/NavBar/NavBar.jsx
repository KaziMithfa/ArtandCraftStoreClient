import React, { useContext } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { loading, user, logout } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/items">All art and craft Items</NavLink>
      </li>

      <li>
        <NavLink to="/addItem">Add Craft Items</NavLink>
      </li>

      <li>
        <NavLink to="/myList">My Art& Craft List</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logout()
      .then(() => {
        <Navigate to="/"></Navigate>;
      })
      .catch();
  };

  return (
    <div className="fixed top-0  left-0 w-full z-50 bg-base-100">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Art and Craft Store</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-x-1">
          {loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : user ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar tooltip  tooltip-bottom  "
                data-tip={user.displayName}
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <button onClick={handleLogout} className="btn sm:mr-2">
                Log Out
              </button>
            </>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn btn-secondary">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
