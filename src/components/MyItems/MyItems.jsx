import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/item/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }

            const remaining = displayItems.filter((item) => item._id !== id);
            setDisplayItems(remaining);
            setItems(remaining);
          });
      }
    });
  };

  const handleCustomaization = (filter) => {
    if (filter === "Yes") {
      const newItems = items.filter((item) => item.customaization === "Yes");
      setDisplayItems(newItems);
      //console.log(displayItems);
    } else if (filter === "No") {
      const newItems = items.filter((item) => item.customaization === "No");
      setDisplayItems(newItems);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/myItems/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setItems(data);
        setDisplayItems(data);
      });
  }, []);

  return (
    <div className="mx-auto lg:max-w-5xl md:max-w-md lg:px-6 lg:pt-5 pt-2">
      <h2>Here you will see your items</h2>

      <div className="text-center lg:mb-6">
        <details className="dropdown ">
          <summary className="btn m-1">Customization</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleCustomaization("Yes")}>
              <a>Customaization: YES </a>
            </li>
            <li onClick={() => handleCustomaization("No")}>
              <a>Customaization: No</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-2 gap-1">
        {displayItems.map((item) => (
          <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img className="h-64 object-cover" src={item.url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">{item.itemName}</h2>
                <h2 className="card-title">price: {item.price}</h2>
              </div>

              <h2 className="card-title">StockStatus: {item.stockStatus}</h2>

              <div className="card-actions justify-between">
                <Link to={`/item/${item._id}`}>
                  <button className="btn btn-primary">Update</button>
                </Link>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
