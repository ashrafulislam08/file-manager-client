import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { useState } from "react";
const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [submitResponse, setSubmitResponse] = useState(false);
  const [res, setRes] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setRes(true);
      submitResponse(true);
    } catch (error) {
      setSubmitResponse(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[950px] h-[500px] flex justify-center items-center bg-white rounded-md overflow-hidden">
        <div className="w-[600px]">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="w-[350px] flex justify-center items-center p-5 h-full  ">
          {res ? (
            <div>
              <p>Please enter the authentication code sent to your email</p>
              <form action="" className="mt-4">
                <div className="w-full flex flex-col gap-y-8">
                  <div className="w-ful grid grid-cols-4 gap-x-3">
                    <input
                      type="text"
                      required
                      name="number1"
                      className="input-field"
                    />
                    <input
                      type="text"
                      required
                      name="number2"
                      className="input-field"
                    />
                    <input
                      type="text"
                      required
                      name="number3"
                      className="input-field"
                    />
                    <input
                      type="text"
                      required
                      name="number4"
                      className="input-field"
                    />
                  </div>
                </div>
                <button className="w-full text-white px-3 py-2 rounded outline-none bg-blue-500 mt-3 cursor-pointer hover:shadow-lg hover:bg-blue-600">
                  Sign Up
                </button>
              </form>
            </div>
          ) : (
            <div className="text-[#2f2b3dc7] w-full relative">
              <h2 className="text-2xl">Sign Up</h2>
              <form onSubmit={handleSubmit} className="pt-4">
                <div className="flex flex-col gap-y-2 mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleInput}
                    value={state.name}
                    placeholder="Name"
                    id="name"
                    className="input-field"
                    required
                  />
                </div>
                <div className="flex flex-col gap-y-2 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    onChange={handleInput}
                    value={state.email}
                    placeholder="Email"
                    className="input-field"
                    id="email"
                  />
                </div>
                <div className="flex flex-col gap-y-2 mb-3">
                  <label htmlFor="password">Name</label>
                  <input
                    required
                    type="password"
                    name="password"
                    onChange={handleInput}
                    value={state.password}
                    placeholder="Password"
                    id="password"
                    className="input-field"
                  />
                </div>
                <button className="w-full text-white px-3 py-2 rounded outline-none bg-blue-500 mt-3 cursor-pointer hover:shadow-lg hover:bg-blue-600">
                  Sign Up
                </button>
              </form>
              <div className="flex w-full mt-4 justify-center items-center gap-x-2">
                <span className="text-md">Already have an account?</span>
                <Link
                  className="text-md text-blue-500 hover:text-blue-600 hover:underline cursor-pointer"
                  to="/signin"
                >
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
