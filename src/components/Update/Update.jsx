import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const item = useLoaderData();

  const [category, setCategory] = useState(item.subcategoryName);
  const [customaization, setCustomaization] = useState(item.customaization);

  const handleUpdateItem = (e) => {
    e.preventDefault();

    const form = e.target;
    const itemName = form.itemName.value;
    const url = form.image.value;

    const subcategoryName = category;
    const shortDescription = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const time = form.processingTime.value;
    const stockStatus = form.stockStatus.value;

    const updateItem = {
      itemName,
      url,
      subcategoryName,
      shortDescription,
      customaization,
      price,
      rating,
      time,
      stockStatus,
    };

    fetch(`http://localhost:5000/item/${item._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "You have successfully updated the item",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="mx-auto lg:w-max">
      <form onSubmit={handleUpdateItem}>
        {/* form photo url row  */}
        <div className="mb-4">
          <div className="w-full ">
            <label>Image</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="image"
                defaultValue={item.url}
                placeholder="image url"
              />
            </div>
          </div>
        </div>

        {/* form row Item name and sub category */}

        <div className="md:flex mb-6 md:items-center  ">
          <div className="w-1/2">
            <label> Item Name</label>

            <input
              className="input input-bordered join-item w-full"
              name="itemName"
              placeholder="Item Name"
              defaultValue={item.itemName}
            />
          </div>

          <div className="w-1/2 ml-4">
            <label className="label">
              <span className="label-text">SubCategory Name</span>
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select select-bordered w-full "
            >
              <option disabled>Choose your sub category</option>
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Oil Panting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>
        </div>

        <div className=" mb-4 md:flex md:justify-between items-center md:gap-x-4 ">
          <div className="md:w-1/2">
            <textarea
              className="textarea"
              name="description"
              defaultValue={item.shortDescription}
              placeholder="Short Descrption"
            ></textarea>
          </div>

          <div className="w-1/2 ">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>

            <select
              className="select select-bordered w-full "
              value={customaization}
              onChange={(e) => setCustomaization(e.target.value)}
            >
              <option disabled>Select your option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        {/* form Supplier and taste */}
        <div className="md:flex mb-6">
          <div className="w-1/2">
            <label>Price</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="price"
                placeholder="Price"
                defaultValue={item.price}
              />
            </div>
          </div>

          <div className="w-1/2 ml-4">
            <label>Rating</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="rating"
                placeholder="Rating"
                defaultValue={item.rating}
              />
            </div>
          </div>
        </div>
        {/* form row Category and Details */}
        <div className="md:flex mb-6">
          <div className="w-1/2">
            <label>Processing Time</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="processingTime"
                placeholder="Processing Time"
                defaultValue={item.time}
              />
            </div>
          </div>

          <div className="w-1/2 ml-4">
            <label>Stock Status</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="stockStatus"
                placeholder="Stock Status"
                defaultValue={item.stockStatus}
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-block bg-red-800"
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;
