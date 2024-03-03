import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CharacterList.css";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    responseData();
  }, []);
  const responseData = async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setCharacters(response.data.results);
    } catch (error) {
      console.log("Error fetching characters:", error);
    }
  };

  return (
    <div className="autoCenter">
      <ul className="listingContainer">
        {characters.map((character) => (
          <li key={character.id}>
            <Link className="character-link" to={`/character/${character.id}`}>
              <img
                className="character-image"
                src={character.image}
                alt={character.name}
              />
              <div className="character-details">
                <p className="character-name">{`Name - ${character.name}`}</p>
                <p className="character-status">{`Gender - ${character.gender}`}</p>
                <p className="character-status">{`Status - ${character.status}`}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
