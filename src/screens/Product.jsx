import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { LoadProduct } from "../utils/LoadData";
const Detail = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(["products", id], () =>
    LoadProduct(id)
  );
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error:{error.message}</div>;
  }
  return (
    <div className="mt-[250px] ms-[300px] bg-green-500 grid grid-cols-3 gap-3 ">
      {data.products.map((product, index) => (
        <div className="border flex flex-col items-center justify-center">
          <img className=" size-48 " src={product.thumbnail} alt={product.title} />
          <h1>{product.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Detail;
