import Navbar from "./Components/Navbar";
import React, { useEffect, useState } from "react";
import Characters from "./Components/Characters";

function App() {
  const [characters, setCharacters] = useState([])

  const initialUrl = "https://rickandmortyapi.com/api/character"
  const fetchCharacters = (url) => {

    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  };
  useEffect(() => {
    fetchCharacters(initialUrl)
  }, [])


  return (
    <>
      <Navbar brand="Devin Llerena app" />

      <div className="container mt-5">
          <Characters Characters={characters}/>
      </div>

    </>



  );
}

export default App;
