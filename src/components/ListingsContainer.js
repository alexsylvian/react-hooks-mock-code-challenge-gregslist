import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {

  const listingsList = listings.map(listing => (
    <ListingCard id={listing.id} key={listing.id} description={listing.description} location={listing.location} image={listing.image} onDelete={onDelete} />
  ))

  return (
    <main>
      <ul className="cards">
        {listingsList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
