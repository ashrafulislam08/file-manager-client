import Logo from "../assets/images/logo.png";
const SignUp = () => {
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[950px] h-[500px] flex justify-center items-center bg-white rounded-md overflow-hidden">
        <div className="w-[600px]">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="w-[350px] flex justify-center items-center p-5 h-full  ">
          <div className="text-[#2f2b3dc7] w-full relative">
            <h2 className="text-2xl">Sign Up</h2>
            <form className="pt-4">
              <div className="flex flex-col gap-y-2 mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="name"
                  className="input-field"
                />
              </div>
              <div className="flex flex-col gap-y-2 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-field"
                  id="email"
                />
              </div>
              <div className="flex flex-col gap-y-2 mb-3">
                <label htmlFor="password">Name</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  className="input-field"
                />
              </div>
              <button className="w-full text-white px-3 py-2 rounded outline-none bg-blue-500 mt-3 cursor-pointer">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
