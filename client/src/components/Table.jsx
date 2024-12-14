import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLists, deleteOnelist } from "../React_Redux/Action.js";

const Table = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.list);
  // console.log(status, data);
  React.useEffect(() => {
    dispatch(getLists());
  }, [dispatch]);
  const deleteData = (id) => {
    deleteOnelist(id);
  };
  ///// pending
  // const editdata = async (id) => {
  //   // editOnelist(id);
  // };
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
