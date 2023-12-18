import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [submission, setSubmission] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(resData => setListings(resData))
  }, [])

  const visibleListings = listings.filter(listing => listing.description.toLowerCase().includes(submission.toLowerCase()))

  function onDelete(id){
    const updatedListings = listings.filter(listing => listing.id !== id)
    setListings(updatedListings)
  }

  return (
    <div className="app">
      <Header setSubmission={setSubmission} />
      <ListingsContainer onDelete={onDelete} listings={visibleListings} />
    </div>
  );
}

export default App;
