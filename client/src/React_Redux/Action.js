import axios from "axios";
import { SERVER } from "../server";
import { getUserSUC, getUserREQ } from "./Reducers";
import { LIST_REQUEST, LIST_SUCCESS } from "./listReducer";

export const register = (data) => async dispatch => {
    try {
        await axios.post(`${SERVER}/signup`, data, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
    } catch (error) { }
};

export const login = async (data) => {
    try {
        await axios.post(`${SERVER}/signin`, data, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
    } catch (error) { }
};



export const authuser = () => async dispatch => {
    try {
        dispatch({ type: getUserREQ })
        const { data } = await axios.get(`${SERVER}/getuser`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        dispatch({ type: getUserSUC, payload: data?.user })

    } catch (error) { }
};


export const logout = async () => {
    try {
        await axios.get(`${SERVER}/logout`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
    } catch (error) { }
};



///////////list apis 
export const getLists = () => async dispatch => {
    try {
        dispatch({ type: LIST_REQUEST })
        const data = await axios.get(`${SERVER}/list/all`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        // console.log(data);
        dispatch({ type: LIST_SUCCESS, payload: data?.data?.data })
    } catch (error) { }
}





export const deleteOnelist = async (id) => {
    try {
        await axios.delete(`${SERVER}/list/${id}`, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
    } catch (error) { }
};
///// pending
export const editOnelist = async (id) => {
    //     try {
    //         await axios.patch(`${SERVER}/list/${id}`, {
    //             headers: { "Content-Type": "application/json" },
    //             withCredentials: true,
    //         });
    //     } catch (error) { }
};