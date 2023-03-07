import React, { useState } from "react";
import Rates from "./Rates";
import iconStar from "../images/icon-star.svg";
import thankYou from "../images/illustration-thank-you.svg";

export default function InteractiveRating() {
  const [rating, setRating] = useState(0);
  const [ratingSelected, setRatingSelected] = useState(0);

  return (
    <div className="bg-very-dark-blue w-[320px] h-[350px] mx-auto p-7 space-y-4 rounded-3xl flex flex-col justify-around md:w-[375px] md:h-96">
      {rating === 0 ? (
        <>
          {/* Rating state start */}
          <div className="p-3 bg-dark-blue w-fit rounded-full">
            <img src={iconStar} alt="" height="12" />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">How did we do?</h1>
            <p className="text-[13px] text-light-gray md:text-sm">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <Rates
            handleChange={setRatingSelected}
            ratingSelected={ratingSelected}
          />
          <button
            onClick={() => setRating(ratingSelected)}
            className="bg-orange rounded-full w-full py-2 text-white uppercase text-sm font-semibold hover:bg-white hover:text-orange transition"
          >
            <p className="pt-1 tracking-widest">Submit</p>
          </button>
          {/* Rating state end */}
        </>
      ) : (
        <>
          {/* Thank you state start */}
          <img src={thankYou} alt="" width="150" className="mx-auto" />
          <div className="bg-dark-blue text-orange text-center w-fit mx-auto pb-1 pt-2 px-3 rounded-full text-sm">
            You selected {rating} out of 5
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-center">Thank you!</h1>
            <p className="text-center text-[13px] text-medium-gray md:text-sm">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
          {/* Thank you state end */}
        </>
      )}
    </div>
  );
}
