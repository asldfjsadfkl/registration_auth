import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/bootstrap.min.css";
import "../css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { SERVER } from "../server";

const NavBar = () => {
  const [auth, setAuth] = useState();
  const [refresh, setRefresh] = useState(false);

  const novigate = useNavigate();
  React.useEffect(() => {
    const go = async () => {
      try {
        const user = await axios.get(`${SERVER}/getuser`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setAuth(user?.data?.user);
      } catch (error) {}
    };
    go();
  }, [refresh]);

  const handleSubmit = async () => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
      await axios.get(`${SERVER}/logout`, config);
      setRefresh(true);
      novigate("/signin");
      window.location.reload();
    } catch (error) {}
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand " href="#">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={auth ? "nav-item" : "d-none"}>
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className={auth ? "nav-item" : "d-none"}>
              <NavLink className="nav-link" to="createlist">
                CreateList
              </NavLink>
            </li>

            <li className={auth ? "nav-item" : "d-none"}>
              <NavLink className="nav-link" to="/data">
                Data
              </NavLink>
            </li>

            <li className={auth ? "d-none" : "nav-item"}>
              <NavLink className="nav-link" to="/signup">
                Register
              </NavLink>
            </li>
            <li className={auth ? "d-none" : "nav-item"}>
              <NavLink className="nav-link" to="/signin">
                Login
              </NavLink>
            </li>

            <li className={auth ? "nav-item" : "d-none"}>
              <NavLink className="nav-link" onClick={handleSubmit} to="#">
                Logout
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
