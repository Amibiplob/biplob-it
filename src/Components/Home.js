import React from "react";
import Lottie from "lottie-react";
import img from "./img/quiz-mode.json";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around items-center w-11/12 mx-auto my-5">
      <div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-6xl">Learn without limits</h1>
            <p className="text-4xl my-5">
              Enjoy our premium course with discount
            </p>
            <div className="flex justify-end">
              <Link to="/course" className="btn btn-primary">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-96">
        <Lottie animationData={img} loop={true} />
      </div>
    </div>
  );
};

export default Home;
