import { getAuth, signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./Context/UserContext";
import app from "./FireBase/firebase.init";
const auth = getAuth(app);

const Navbar = ({ setDark }) => {
  const { user } = useContext(AuthContext);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        toast.info("Sign-out successful.", { autoClose: 500 });
      })
      .catch((error) => {
        // An error happened.
        toast.error(error, { autoClose: 500 });
      });
  };
  // console.log(user);
  return (
    <div className="navbar bg-neutral lg:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown mr-2">
          <label className="btn btn-circle swap swap-rotate lg:hidden">
            <input type="checkbox" />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Item 1</Link>
            </li>
            <li>
              <Link>Item 1</Link>
            </li>
            <li>
              <Link>Item 1</Link>
            </li>
            <li>
              <Link>Item 1</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center btn btn-ghost ">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/24/11/37/b-39503_960_720.png"
            alt=""
            className="w-6 h-6"
          ></img>
          <p className="normal-case text-xl text-neutral-content pl-0">
            BipoB IT
          </p>
        </Link>
      </div>

      <div className="navbar-end">
        <div>
          <ul className="flex lg:gap-2 text-neutral-content">
            <li
              className="hover:bg-slate-300 hover:rounded-lg tooltip tooltip-bottom"
              data-tip="Home"
            >
              <NavLink to="/home">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-blue-100 text-blue-600 round px-2 py-1 rounded-lg"
                        : "px-2 py-1"
                    }
                  >
                    Home
                  </span>
                )}
              </NavLink>
            </li>

            <li
              className="hover:bg-slate-300 hover:rounded-lg tooltip tooltip-bottom"
              data-tip="Blog"
            >
              <NavLink to="/blog">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-blue-100 text-blue-600 round px-2 py-1 rounded-lg"
                        : "px-2 py-1"
                    }
                  >
                    Blog
                  </span>
                )}
              </NavLink>
            </li>
            <li
              className="hover:bg-slate-300 hover:rounded-lg tooltip tooltip-bottom"
              data-tip="Faq"
            >
              <NavLink to="/faq">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-blue-100 text-blue-600 round px-2 py-1 rounded-lg"
                        : "px-2 py-1"
                    }
                  >
                    Faq
                  </span>
                )}
              </NavLink>
            </li>
            <li
              className="hover:bg-slate-300 hover:rounded-lg tooltip tooltip-bottom"
              data-tip="Course"
            >
              <NavLink to="/course">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-blue-100 text-blue-600 round px-2 py-1 rounded-lg"
                        : "px-2 py-1"
                    }
                  >
                    Course
                  </span>
                )}
              </NavLink>
            </li>

            {!user?.email && (
              <>
                <li
                  className="hover:bg-slate-300 hover:rounded-lg tooltip tooltip-bottom"
                  data-tip="Login"
                >
                  <NavLink to="/login">
                    {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "bg-blue-100 text-blue-600 round px-2 py-1 rounded-lg"
                            : "px-2 py-1"
                        }
                      >
                        Login
                      </span>
                    )}
                  </NavLink>
                </li>
                <li
                  className="hover:bg-slate-300 hover:rounded-lg tooltip tooltip-bottom"
                  data-tip="Register"
                >
                  <NavLink to="/register">
                    {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "bg-blue-100 text-blue-600 round px-2 py-1 rounded-lg"
                            : "px-2 py-1"
                        }
                      >
                        Register
                      </span>
                    )}
                  </NavLink>
                </li>
                <li>
                  <label className="swap swap-rotate">
                    <input type="checkbox" />
                    <svg
                      onClick={() => setDark(!false)}
                      className="swap-on fill-current w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg
                      onClick={() => setDark(false)}
                      className="swap-off fill-current w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </li>
              </>
            )}
          </ul>
        </div>

        {user && (
          <div className="dropdown dropdown-end ml-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div
                className="w-10 rounded-full tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  src={
                    user?.email
                      ? user?.photoURL
                      : "https://cdn.vectorstock.com/i/1000x1000/25/72/picture-coming-soon-icon-vector-31612572.webp"
                  }
                  alt="Profile"
                  referrerPolicy="no-referrer"
                  className="object-cover object-center w-96 rounded dark:bg-gray-500"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>

              <li>
                <button className="flex flex-row justify-star">
                  <p className="pr-2">Darkmode</p>
                  <label className="swap swap-rotate pl-2">
                    <input type="checkbox" />
                    <svg
                      onClick={() => setDark(!false)}
                      className="swap-on fill-current w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg
                      onClick={() => setDark(false)}
                      className="swap-off fill-current w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </button>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
