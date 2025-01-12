import React, { useState, useEffect } from 'react';
import Character from '../../components/Character';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../apiUrl.js'; 

const CharacterPage = () => {

  const { id } = useParams(); // Récupère l'id depuis l'URL
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        console.log(apiUrl);
        const response = await axios.get(`${apiUrl}/characters/${id}`);
        setCharacter(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h1>Character Page</h1>
      <Character {...character} />
    </div>
  );
};

export default CharacterPage;
