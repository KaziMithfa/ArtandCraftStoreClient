import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  const items = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const showingItems = items.slice(0, 6);
    setProducts(showingItems);
  }, [items]);

  return (
    <div>
      <div className=" container mx-auto ">
        {/* Slider */}
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="../../../public/images/one.jpg" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="/images/two.jpg" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="/images/three.jpg" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="/images/four.jpg" className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        {/* Showing the items here.... */}

        <div className="lg:mt-10 mt-5">
          <div className="mx-auto lg:max-w-6xl md:max-w-md ">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-2">
              {products.map((item) => (
                <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
                  <figure>
                    <img
                      className="h-64 object-cover"
                      src={item.url}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between">
                      <h2 className="card-title">{item.itemName}</h2>
                      <h2 className="card-title">price: {item.price}</h2>
                    </div>

                    <div className="card-actions justify-center">
                      <Link to={`/viewDetails/${item._id}`}>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Crafiting Tips section */}

        <div className="my-10 bg-base-200 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-6">
            Crafting Tips for Beginners
          </h2>
          <div className="flex justify-center">
            <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
              <li>Always start with a clean and organized workspace.</li>
              <li>Use eco-friendly and sustainable materials when possible.</li>
              <li>Practice basic techniques before trying complex designs.</li>
              <li>Let creativity flow — there are no mistakes in crafting!</li>
              <li>
                Store finished items in a safe, dry place to preserve them.
              </li>
            </ul>
          </div>
        </div>
        {/* Essential Crafting tool section */}

        <div className="my-10 bg-base-200 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-6">
            Essential Crafting Tools
          </h2>
          <div className="flex justify-center">
            <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside ">
              <li>Sharp scissors for precise cutting</li>
              <li>Hot glue gun for quick bonding</li>
              <li>Assorted paint brushes for detailing</li>
              <li>Cutting mat to protect your surfaces</li>
              <li>Measuring tape or ruler for accuracy</li>
            </ul>
          </div>
        </div>

        {/* Footer Section  */}
      </div>
    </div>
  );
};

export default Home;
