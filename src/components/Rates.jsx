import React from "react";

const rates = ["1", "2", "3", "4", "5"];

export default function Rates({ handleChange, ratingSelected }) {
  const setColor = (currentRate) => {
    const defaultStyle =
      "h-10 w-10 rounded-full flex items-center justify-center md:h-14 md:w-14 md:text-lg";
    const defaultColor =
      "bg-dark-blue text-light-gray hover:bg-medium-gray hover:text-white";
    const selectedColor = "bg-orange text-white";

    return currentRate === ratingSelected
      ? `${defaultStyle} ${selectedColor}`
      : `${defaultStyle} ${defaultColor}`;
  };

  return (
    <div className="flex justify-between py-1">
      {rates.map((rate) => (
        <label htmlFor={`rate-${rate}`} key={rate} className={setColor(rate)}>
          <input
            type="radio"
            value={rate}
            id={`rate-${rate}`}
            name="rate"
            onChange={(e) => handleChange(e.target.value)}
            className="hidden"
          />
          <span className="pt-1">{rate}</span>
        </label>
      ))}
    </div>
  );
}
