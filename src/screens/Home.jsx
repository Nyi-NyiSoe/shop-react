import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import LoadData from "../utils/LoadData";
const Category = () => {
  const { data, error, isLoading, isError } = useQuery("products", LoadData);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error:{error.message}</div>;
  }
  return (
    <div className="p-10 top-0 h-full border bg-red-600 inline-block fixed ">
      <h1>Products</h1>
      <ul>
        {data.map((product, index) => (
          <Link key={index} to={`/details/${product.slug}`}>
            <li className=" underline " key={index}>
              {product.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
 const Home = () => {
  return (
    <>
      <div className="ms-[250px]">home</div>
    </>
  );
};

export { Category, Home };

