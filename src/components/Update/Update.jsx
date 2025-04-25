import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const item = useLoaderData();

  return (
    <div className="mx-auto lg:w-max">
      <form>
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

            <select className="select select-bordered w-full ">
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

            <select className="select select-bordered w-full ">
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
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;
