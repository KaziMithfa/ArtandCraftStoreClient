import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        if (location?.state) {
          navigate(location.state);
        } else {
          navigate("/");
          toast.success("Logged in successfully...");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {};

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        if (location?.state) {
          navigate(location.state);
        } else {
          navigate("/");
          toast.success("Logged in successfully...");
        }
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div>
          <form
            onSubmit={handleLogin}
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full text-center">
                Login
              </button>
            </div>
          </form>

          <div className="flex lg:flex-row flex-col items-center justify-center gap-y-1 lg:gap-x-4  ">
            <button onClick={handleGoogleSignIn} className="btn btn-primary ">
              Login With Google
            </button>
            <button onClick={handleGithubSignIn} className="btn btn-primary ">
              Login With Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
