import * as Yup from "yup";

const Schema = Yup.object({
  name: Yup.string().min(2).max(15).required("Area is empty"),

  phone: Yup.number().required("Area is empty"),

  email: Yup.string().email().required("Area is empty"),

  password: Yup.string().min(6).max(20).required("Area is empty"),
});
export default Schema;
