import React from "react";
import { useLoaderData } from "react-router-dom";

const VIewDetials = () => {
  const item = useLoaderData();
  console.log(item);
  return (
    <div className="max-w-2xl  mx-auto  bg-white rounded-xl lg:p-4 p-2 border border-gray-300 select-none ">
      <div className="flex text-center">
        <img
          className="w-full max-h-80 object-contain rounded-md mb-6"
          src={item.url}
          alt=""
        />
      </div>

      <div className="flex justify-between ">
        <div className="pt-3">
          <h2 className="text-3xl font-bold lg:text-xl ">
            {" "}
            Name: {item.itemName}
          </h2>

          <h2 className="text-3xl font-bold lg:text-xl ">
            {" "}
            Description: {item.shortDescription}
          </h2>

          <h2 className="text-3xl font-bold lg:text-xl  ">
            {" "}
            Price: {item.price}
          </h2>

          <h2 className="text-3xl font-bold lg:text-xl  ">
            {" "}
            Processing Time: {item.time}
          </h2>

          <h2 className="text-3xl font-bold lg:text-xl  ">
            {" "}
            Email: {item.email}
          </h2>
        </div>

        <div className="pt-3">
          <h2 className="text-3xl font-bold lg:text-xl">
            Category: {item.subcategoryName}
          </h2>

          <h2 className="text-3xl font-bold lg:text-xl">
            Customaization: {item.customaization}
          </h2>

          <h2 className="text-3xl font-bold lg:text-xl ">
            Rating: {item.rating}
          </h2>

          <h2 className="text-3xl font-bold lg:text-xl ">
            StockStatus: {item.stockStatus}
          </h2>

          <h2 className="text-3xl font-bold lg:text-xl  ">
            {" "}
            UserName: {item.userName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VIewDetials;
