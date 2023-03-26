import React from "react";
import Img from "../Assets/card-top.jpg"


const Card = (props) => {
 
  return (
    <>
      {props.data
        ? props.data.map((Card, i) => (
            <div key={`${Card.name}-${i}`} className="max-w-xs rounded-3xl overflow-hidden shadow-xl">
              <img
                className="w-lg"
                src={Img}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{Card.title}</div>
                <p className="text-gray-700 text-base">{Card.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {Card.buttonText}
                </button>
              </div>
            </div>
          ))
        : "loading"}
    </>
  );
};

export default Card;
