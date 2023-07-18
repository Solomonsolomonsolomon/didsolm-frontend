export default function SearchBar() {
  return (
    <div className="container">
      <div className="search-bar flex justify-center border ">
        <input
          type="search"
          name=""
          id=""
          placeholder="search products,brands or categories"
          className="placeholder:text-center lg:w-[50%] my-3 rounded-[20px] "
        />
      </div>
    </div>
  );
}
