import { Link } from "@remix-run/react";

const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto p-10 rounded-xl bg-darker shadow-md">
      <h1 className="text-white font-semibold text-2xl text-center mb-4">
        Login Form
      </h1>
      <h3 className="text-sm text-center">
        Welcome home! If you are a member of Hamkari, enter
      </h3>
      <form className="mt-10 mb-4 flex flex-col gap-5">
        <div className="form-group">
          <label htmlFor="name">Email or Username</label>
          <input type={"text"} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input type={"text"} />
        </div>
        <button className="btn primary">Login</button>
      </form>
      <Link to={'/auth/register'} className='text-sm'>Create Account?</Link>
    </div>
  );
};

export default LoginPage;
