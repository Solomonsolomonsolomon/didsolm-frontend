import { Link } from "react-router-dom";
export default function LoginForm({
  handleLoginFormEntries,
  handleLoginFormSubmission,
}) {
  return (
    <>
      <div className="h-[100vh] border  grid grid-cols-1 content-center items-center justify-center border-black bg-blue-900">
        <Link to="/" className="text-white underline hover:text-blue-300">
          home
        </Link>
        <div className="h-[100%] grid justify-center ">
          <h1 className="text-center text-white text-[24px]">LOGIN</h1>
          <form
            className=" w-[100%] p-10 border border-white  bg-white"
            onSubmit={handleLoginFormSubmission}
          >
            <input
              type="email"
              placeholder="email"
              className="p-[2%]  placeholder:text-center"
              name="email"
              onChange={handleLoginFormEntries}
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="password"
              className="p-[2%] placeholder:text-center"
              onChange={handleLoginFormEntries}
            />
            <Link to="/signup" className="underline">
              signup?
            </Link>
            <button className="bg-blue-900 border text-[12px] p-[2%] text-white">
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
