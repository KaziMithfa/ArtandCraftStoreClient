import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllItems = () => {
  const items = useLoaderData();

  return (
    <div className="mx-auto lg:max-w-6xl md:max-w-md ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-2">
        {items.map((item) => (
          <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img className="h-64 object-cover" src={item.url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">{item.itemName}</h2>
                <h2 className="card-title">price: {item.price}</h2>
              </div>

              <div className="card-actions justify-center">
                <Link to={`/viewDetails/${item._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
