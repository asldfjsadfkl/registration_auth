import React, { useState } from "react";
import axios from "axios";
import { SERVER } from "../server.js";

const Table = () => {
  const [data, setData] = useState();
  console.log(data);

  React.useEffect(() => {
    const data = async () => {
      try {
        const data = await axios.get(`${SERVER}/list/all`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setData(data?.data?.data);
      } catch (error) {}
    };
    data();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`${SERVER}/list/${id}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
  };
  const editdata = async (id) => {
    await axios.patch(`${SERVER}/list/${id}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
  };
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <section className="w-75 bg-primary text-center fs-4 text-light">
          Users data in table groupe
        </section>

        <table class="table border w-75">
          <thead>
            <tr>
              <th className="border text-center" scope="col">
                Number
              </th>
              <th className="border text-center" scope="col">
                Name
              </th>
              <th className="border text-center" scope="col">
                Email
              </th>
              <th className="border text-center" scope="col">
                Phone
              </th>
              <th className="border text-center" scope="col">
                Experience
              </th>
              <th className="border text-center" scope="col">
                Function
              </th>
            </tr>
          </thead>
          {data?.map((dot, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td className="border text-center">{index + 1}</td>
                  <td className="border text-center">{dot?.name}</td>
                  <td className="border text-center">{dot?.email}</td>
                  <td className="border text-center">{dot?.phone}</td>
                  <td className="border text-center">{dot?.exp}</td>

                  <td className="border text-center">
                    <button
                      onClick={() => deleteData(dot?._id)}
                      type="button"
                      class="btn btn-danger btn-sm mx-4"
                    >
                      Delete
                    </button>
                    <button
                      //   onClick={() => editdata(dot?._id)}
                      type="button"
                      class="btn btn-secondary btn-sm"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
