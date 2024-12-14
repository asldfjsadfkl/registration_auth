import React from "react";
import "../css/signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import axios from "axios";
import "../css/bootstrap.min.css";
import "../css/bootstrap.css";
import { useDispatch } from "react-redux";
import { register } from "../React_Redux/Action";

const Signup = () => {
  const dispacth = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const form = Object.fromEntries(data);
    dispacth(register(form));
  };

  return (
    <main className="d-flex justify-content-xl-center">
      <form className="w-25 border p-4 mt-4" onSubmit={handleSubmit}>
        <section className="w-100 text-center fs-3 bg-primary text-light">
          Registraion
        </section>

        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName1"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
};
export default Signup;
