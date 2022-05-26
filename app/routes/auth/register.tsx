import { Link } from "@remix-run/react";

const RegisterPage = () => {
  return (
    <div className="max-w-md mx-auto p-10 rounded-xl bg-darker shadow-md">
      <h1 className="text-white font-semibold text-2xl text-center mb-4">
        Register Form
      </h1>
      <h3 className="text-sm text-center">
        Welcome to Hamkary! Register for membership
      </h3>
      <form className="mt-10 mb-4 flex flex-col gap-5">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type={"text"} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input type={"text"} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input type={"text"} />
        </div>
        <button className="btn primary">Register</button>
      </form>
      <Link to={"/auth/login"} className="text-sm">
        Login?
      </Link>
    </div>
  );
};

export default RegisterPage;
