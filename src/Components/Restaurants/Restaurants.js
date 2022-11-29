import React from "react";
import Data from "./Data";

const Rest = ({
  nameT,
  urlM,
  imgU,
  rating,
  review,
  categoryA,
  categoryT,
  name,
  image_url,
  id,
  review_count,
}) => {
  console.log(categoryA);
  return (
    <div>
      {/* The props name may not be exactly as what is in the data.js file
However, these names must be called exactly as they are spelt here
when passing them in the Rest component       */}
      <div>
        <div>{rating}</div>
        <div>{review}</div>
        <div>{nameT}</div> 
        {/* <img src={imgU} alt="" /> */}
        {/* <div>{categoryA}</div>
        <div>{categoryT}</div> */}
      </div>

      {/* This is for spread operator pattern. Here, the props are called exactly as
      they were spelt in the Data.js file */}
      <div>
        <div>{name}</div>
        <div>{review_count}</div>
        <div>{id}</div>
      </div>
    </div>
  );
};

function Restaurants() {
  return (
    <div>
      <div>
        {Data.map((item) => (
          <Rest
            rating={item.rating}
            nameT={item.name}
            review={item.review_count}
            // categoryA={item.categories.alias}
            // categoryT={item.categories.title}
          />
        ))}
      </div>
      <br />
      {/* Spread Operator style  */}
      <div>
        {Data.map((item) => (
          <Rest key={item.num} {...item} />
        ))}
      </div>
      <br />
      {/* another simple way to pass all  the props just like spread operator */}
      <div>
        rgd
        {Data.map((items) => (
          <Rest key={items.num} item={items} />
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
