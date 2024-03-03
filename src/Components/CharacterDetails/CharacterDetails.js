import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CharacterDetails.css";
function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    responseData();
  }, [id]);

  const responseData = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter(response.data);
    } catch (error) {
      console.log("Error in Details page", error);
    }
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="character-details">
      <img src={character.image} alt={character.name} />
      <p className="character-name ">Name:{character.name}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
}

export default CharacterDetails;
