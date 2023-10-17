import React from "react";

function ToyCard( { toy, deleteFromDatabaseAndDOM, updateLikes, setToys } ) {

  function handleDonateClick() {
    deleteFromDatabaseAndDOM(toy.id)
  }

  function handleLikeClick() {
    updateLikes(toy.id, toy.likes)
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDonateClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
