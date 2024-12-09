import React from "react";
import axios from "axios";
import { SERVER } from "../server";

const CreateList = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    console.log(data);
    try {
      await axios.post(`${SERVER}/list/createlist`, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="d-flex justify-content-xl-center">
      <form className="w-25 border p-4 mt-4" onSubmit={handleSubmit}>
        <section className="w-100 text-center fs-3 bg-primary text-light">
          Data Entry Form
        </section>

        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">
            Name
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
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPhone" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            name="phone"
            className="form-control"
            id="exampleInputPhone"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputExp" className="form-label">
            Experience
          </label>
          <input
            type="text"
            name="exp"
            className="form-control"
            id="exampleInputExp"
          />
        </div>

        <button type="submit" className="w-100 btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
};

export default CreateList;
