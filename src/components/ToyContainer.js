import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {toys, deleteFromDatabaseAndDOM, updateLikes, setToys } ) {
  return (
    <div id="toy-collection">{
      toys.map(toy => {
        return (<ToyCard key={toy.name} toy={toy} deleteFromDatabaseAndDOM={deleteFromDatabaseAndDOM} updateLikes={updateLikes} setToys={setToys}/>)
      })
    }</div>
  );
}

export default ToyContainer;
