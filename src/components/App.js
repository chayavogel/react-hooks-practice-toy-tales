import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function updateDataBase(formData) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
  }

  function deleteFromDatabaseAndDOM(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    const updatedToys = toys.filter((toy) => {
      return toy.id !== id
    })
    setToys(updatedToys)
  }

  function updateLikes(id, likes) {

    const updatedLikes = likes+1

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ likes: updatedLikes })
    })

    const updatedToys = toys.map((toy) => {
      if (toy.id === id) {
        return { ...toy, likes: toy.likes+1 }
      }
      return toy;
    })
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys} updateDataBase={updateDataBase}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteFromDatabaseAndDOM={deleteFromDatabaseAndDOM} updateLikes={updateLikes} setToys={setToys}/>
    </>
  );
}

export default App;
