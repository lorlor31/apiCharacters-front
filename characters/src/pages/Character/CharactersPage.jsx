import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Remplace l'URL ci-dessous par celle de ton API réelle
    const fetchCharacters = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`${apiUrl}/characters/`);
          console.log(response.data)
          setCharacters(response.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCharacters();
    },[]);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h1>Liste des personnages</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>
              {character.nickname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharactersPage;
