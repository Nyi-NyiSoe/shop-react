import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { LoadData } from "../utils/LoadData";

 const Category = () => {
  const { data, error, isLoading, isError } = useQuery("category", LoadData);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error:{error.message}</div>;
  }
  return (
    <div className="p-10 top-0 h-full border inline-block fixed bg-red-500 overflow-y-auto">
      <h1>Products</h1>
      <ul>
        {data.map((product, index) => (
          <Link key={index} to={`/category/${product.slug}`}>
            <li
              className=" underline  border m-3 text-center rounded-md  shadow-lg p-1"
              key={index}
            >
              {product.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Category;