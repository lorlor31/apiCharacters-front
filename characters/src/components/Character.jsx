import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = ({ characterId }) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        // const response = await axios.get(`http://0.0.0.0:8000/characters/1`);
        const response = await axios.get(`/characters/1`);
        setCharacter(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [characterId]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  const formattedBirthdate = new Date(character.birthdate).toLocaleDateString('fr-FR');
  console.log(formattedBirthdate);
  return (
    <div className="character">
      <h2>{character.nickname}</h2>
      <p>{formattedBirthdate} years old</p>
      <p>{character.deathdate} years old</p>
      <p>{character.abstract}</p>
    </div>
  );
};

export default Character;
