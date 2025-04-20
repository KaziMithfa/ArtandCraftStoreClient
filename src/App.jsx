import "./App.css";

function App() {
  return (
    <>
      <div>
        <form className="card-body  mx-auto lg:w-1/2 md:w-3/4">
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
