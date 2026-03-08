import React from "react";
import Bannerimg from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-20 rounded-2xl mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Bannerimg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-[56px] font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn btn-success mt-12 px-7 py-7 text-white  text-xl">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
