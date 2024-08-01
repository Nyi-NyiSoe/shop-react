import axios from "axios";
const LoadData = async () => {
  const { data } = await axios.get("https://dummyjson.com/products/categories");
  return data;
};

const LoadProduct = async (productName) => {
  const { data } = await axios.get(
    `https://dummyjson.com/products/category/${productName}`
  );
  return data;
};

export { LoadData, LoadProduct };
