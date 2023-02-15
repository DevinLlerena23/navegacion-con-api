import Navbar from "./Components/Navbar";
import Characters from "./Components/Characters";
import Pagination from "./Components/Pagination";
import React, { useEffect, useState } from "react";
import Datos from "./Components/Datos";
import { Routes, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const InitialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.error(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };
  useEffect(() => {
    fetchCharacters(InitialUrl);
  }, []);
  return (
    <>
      <Navbar brand="Rick and Morty"/>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container mt-5">
              <Pagination
                prev={info.prev}
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext}
              />
              <Characters Characters={characters} />
              <Pagination
                prev={info.prev}
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext}
              />
            </div>
          }
        />
        <Route path="/datos" element={<Datos/>} />
      </Routes>
    </>
  );
}

export default App;
