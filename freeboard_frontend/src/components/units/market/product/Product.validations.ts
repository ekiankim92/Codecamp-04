import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Please Enter Your Product"),
  remarks: yup.string().required("Please Enter the remarks"),
  contents: yup.string().required("Please Enter the contents"),
  price: yup.number().required("Please Enter the Price"),
  tags: yup.string().required("Please Enter the Tags"),
});
