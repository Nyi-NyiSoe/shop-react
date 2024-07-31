import axios from "axios";
const LoadData = async () => {
  const { data } = await axios.get("https://dummyjson.com/products/categories");
  return data;

  
};

export default LoadData;
