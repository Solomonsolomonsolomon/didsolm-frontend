import { Fragment } from "react";

export default function Categories() {
  return (
    <Fragment>
      <div className="flex justify-center">
        <h1 className="border-y">categories</h1>
      </div>
      <div className="container main div grid lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-3 grid-cols-3 gap-2">
        <div className="container border  h-[150px] relative flex justify-center justify-items-center">
          <p className="absolute bottom-1 bg-gray-900 w-[100%] text-white text-center">
            back to school
          </p>
        </div>
        <div className="container border  h-[150px] relative">
          <p className="absolute bottom-1 bg-gray-900 w-[100%] text-white text-center z-10">
            nursing
          </p>
        </div>
        <div className="container border  h-[150px] relative">
          <p className="absolute bottom-1 bg-gray-900 w-[100%] text-white text-center">
            summer
          </p>
        </div>
        <div className="container border  h-[150px] relative">
          <p className="absolute bottom-1 bg-gray-900 w-[100%] text-white text-center">
            summer
          </p>
        </div>{" "}
        <div className="container border  h-[150px] relative">
          <p className="absolute bottom-1 bg-gray-900 w-[100%] text-white">
            summer
          </p>
        </div>
      </div>
    </Fragment>
  );
}
