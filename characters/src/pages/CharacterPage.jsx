import React from 'react';
import Character from '../components/Character';

const CharacterPage = () => {
  const characterData = {
    name: 'John Doe',
    age: 30,
    description: 'A brave adventurer'
  };

  return (
    <div>
      <h1>Character Page</h1>
      <Character {...characterData} />
    </div>
  );
};

export default CharacterPage;
