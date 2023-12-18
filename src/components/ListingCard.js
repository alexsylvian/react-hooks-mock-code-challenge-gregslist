import React, { useState } from "react";

function ListingCard({ description, image, location, onDelete, id }) {
  const [favorite, setFavorite] = useState(true)

  function handleClick(){
    if (favorite === true) {
      setFavorite(false)
    } else {
      setFavorite(true)
    }
  }

  function handleDelete(e){
    fetch(`http://localhost:6001/listings/${id}`, {
      method:"DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    onDelete(id)
  }

  return (
    <li id={id} className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;


// {
//   "listings": [
//     {
//       "id": 1,
//       "description": "heater",
//       "image": "./images/heater.jpg",
//       "location": "BROOKLYN"
//     },
//     {
//       "id": 2,
//       "description": "2019 Toyota Tacoma grill",
//       "image": "./images/toyota-grill.jpg",
//       "location": "Williamsburg"
//     },
//     {
//       "id": 3,
//       "description": "Free Braun 3735 Electric Toothbrush charger",
//       "image": "./images/toothbrush-charger.jpg",
//       "location": "Williamsburg"
//     },
//     {
//       "id": 4,
//       "description": "FREE Hundreds of DVD/CD Cases - Different Sizes and Colors",
//       "image": "./images/dvd-cases.jpg",
//       "location": "Prospect Heights"
//     },
//     {
//       "id": 5,
//       "description": "wood",
//       "image": "./images/wood.jpg",
//       "location": "Greenpoint"
//     },
//     {
//       "id": 6,
//       "description": "Beautiful couch",
//       "image": "./images/couch.jpg",
//       "location": "Bay Ridge"
//     },
//     {
//       "id": 7,
//       "description": "Treadmill Parts For Free",
//       "image": "./images/treadmill.jpg",
//       "location": "East Flatbush"
//     }
//   ]
// }

