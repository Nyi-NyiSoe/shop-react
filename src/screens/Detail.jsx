import React from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  console.log(id);

  return <div className="ms-[250px] mt-28">Detail {id}</div>;
};

export default Detail;
