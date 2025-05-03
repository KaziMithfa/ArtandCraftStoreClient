import React, { useState } from "react";
import { toast } from "react-toastify";

const AddItem = () => {
  const [category, setCategory] = useState("");
  const [customaization, setCustomaization] = useState("");

  const handleAddItem = (e) => {
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
    const email = form.email.value;
    const userName = form.userName.value;

    const item = {
      itemName,
      url,
      subcategoryName,
      shortDescription,
      customaization,
      price,
      rating,
      time,
      stockStatus,
      email,
      userName,
    };

    fetch("https://art-and-craft-store-server-alpha.vercel.app/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("You have added the item successfully");

          form.reset();
          setCategory("");
          setCustomaization("");
        }
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center">You can add your items here</h1>

      <form onSubmit={handleAddItem}>
        {/* form photo url row  */}
        <div className="mb-4">
          <div className="w-full ">
            <label>Image</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="image"
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
              <option value="" disabled>
                Choose your sub category
              </option>
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option>
                Watercolour Painting: Floral Watercolor Art, Animal Watercolor
                Portrait
              </option>
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
              placeholder="Short Descrption"
            ></textarea>
          </div>

          <div className="w-1/2 ">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>

            <select
              value={customaization}
              onChange={(e) => setCustomaization(e.target.value)}
              className="select select-bordered w-full "
            >
              <option value="" disabled>
                Select your option
              </option>
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
              />
            </div>
          </div>
        </div>

        <div className="md:flex mb-6">
          <div className="w-1/2">
            <label>User Email</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="email"
                placeholder="Write your Email"
              />
            </div>
          </div>

          <div className="w-1/2 ml-4">
            <label>Name</label>

            <div>
              <input
                className="input input-bordered join-item w-full"
                name="userName"
                placeholder="Write your name here"
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-block bg-red-800"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
