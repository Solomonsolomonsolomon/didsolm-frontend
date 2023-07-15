export default function LoginForm({
  handleLoginFormEntries,
  handleLoginFormSubmission,
}) {
  return (
    <>
      <div className="container flex justify-center  items-center content-center h-[100%]">
        <form
          className="border-black border p-10 "
          onSubmit={handleLoginFormSubmission}
        >
          <input
            type="email"
            placeholder="email"
            className="placeholder:text-center"
            name="email"
            onChange={handleLoginFormEntries}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            className="placeholder:text-center"
            onChange={handleLoginFormEntries}
          />
          <button className="bg-blue-900 border text-[12px] p-1 text-white">
            login
          </button>
        </form>
      </div>
    </>
  );
}
