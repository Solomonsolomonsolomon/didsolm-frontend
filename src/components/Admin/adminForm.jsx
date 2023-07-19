import { enterCustomSize } from "./../../utils/createCustomSize";
export default function AdminForm({ handleInput, handleSubmit }) {
  return (
    <>
      <h2 className="uppercase text-orange-600"> Add an item</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 justify-center items-center content-center  gap-[10px] p-[2%] lg:px-[20%]"
      >
        <div className="flex gap-[10px] w-[100%]">
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleInput}
            className="placeholder:text-center lg:w-[100%] border border-black rounded-name p-1"
          />
          <input
            type="number"
            placeholder="price"
            name="price"
            onChange={handleInput}
            className="placeholder:text-center p-1"
          />
        </div>

        <input
          type="text"
          placeholder="colors:seperate colors with a comma"
          name="color"
          onChange={handleInput}
          className="placeholder:text-center w-[100%] p-1"
        />

        <input
          type="number"
          placeholder="quantity"
          name="quantity"
          onChange={handleInput}
          className="placeholder:text-center w-[100%] p-1"
        />

        <label htmlFor="size" className="">
          <p>select size.you can select multiple or create custom size</p>
          <select
            name="size"
            id="sizes"
            multiple
            onChange={handleInput}
            className="border border-black p-[1%]"
          >
            <option name="opt" value="xl">
              xl
            </option>
            <option name="opt" value="s">
              s
            </option>
            <option name="opt" value="m">
              m
            </option>
          </select>
          <input type="checkbox" name="opt" id="" />
        </label>

        <input
          type="text"
          name="category"
          placeholder="categories : for multiple,seperate by comma"
          className="placeholder:text-center w-[100%] p-1"
          onChange={handleInput}
        />

        <input
          type="file"
          id="file"
          name="image"
          onChange={handleInput}
          className="placeholder:text-center w-[100%] p-1"
          required
        />

        <button className="bg-blue-950 text-white w-[100%]">ADD ITEM</button>
        <button className="orangeBtn" onClick={enterCustomSize}>
          enter custom size
        </button>
      </form>
    </>
  );
}
