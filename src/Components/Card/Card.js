import React from "react";
import "./Card.css";
import Picture from "../../Resources/Airbnb Picture.png";
import Star from "../../Resources/Star rating.png";

// Using Destructuring method
function Card({ title, rating, dateAdded, availability, price, image, star }) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-details">
        <strong>{title}</strong>
        {Array(star)
          .fill()
          .map((i) => (
            <img src={Star} alt="" />
          ))}

        <span>{rating}</span>
      </div>
      <div className="card-details2">
        <p>{dateAdded}</p>
        <p>{availability}</p>
        <strong>{price}</strong>
      </div>
    </div>
  );
}

// OR this method of props
// function Card(props) {
//     return (
//       <div className="card">
//         <img src={props.image} alt="" />
//         <div className="card-details">
//           <strong>{props.title}</strong>
//           <img src={props.star} alt="" />
//           <span>{props.rating}</span>
//         </div>
//         <div className="card-details2">
//           <p>{props.dateAdded}</p>
//           <p>{props.availability}</p>
//           <strong>{props.price}</strong>
//         </div>
//       </div>
//     );
//   }

function Fill() {
  return (
    <div className="fill">
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={5}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={4}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={3}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={5}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={4}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={Star}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={5}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={2}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={4}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={5}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={5}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={5}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={4}
      />
      <Card
        title="Cape Town, South Africa"
        rating="5.0"
        dateAdded="Added 10 weeks ago"
        availability="April 2- 7"
        price="$700 night"
        image={Picture}
        star={5}
      />
    </div>
  );
}

export default Fill;
