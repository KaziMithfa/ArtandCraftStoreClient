import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const photoURl = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) {
      const message = "The password must be at least 6 character long";
      toast.error(message);
      return;
    } else if (!/[A-Z]/.test(password)) {
      const message = "The password must have an uppercase letter";
      toast.error(message);
      return;
    } else if (!/[a-z]/.test(password)) {
      const message = "The password must have a lowercase letter";
      toast.error(message);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = { email, name, photoURl };

        updateUser(name, photoURl).then(() => {
          // The user has been created successfully
          // Create operation of the database

          fetch("https://art-and-craft-store-server-alpha.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("you have registered successfully");
                navigate("/");
              }
            });
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleRegister}
          className="card-body  mx-auto lg:w-1/2 md:w-3/4"
        >
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text text-xl text-black">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text text-xl text-black">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label text-xl text-black">
              <span className="label-text">photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo URL"
              name="photo"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label text-xl text-black">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
