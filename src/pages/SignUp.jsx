import Logo from "../assets/images/logo.png";
const SignUp = () => {
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[950px] h-[500px] flex justify-center items-center bg-white rounded-md overflow-hidden">
        <div className="w-[600px]">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="w-[600px]">
          <form>
            <input type="text" className="border" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
