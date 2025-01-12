import React, { useState, useEffect } from 'react';

const Character = ({ ...character }) => {
  const formattedBirthDate = new Date(character.birthDate).toLocaleDateString('fr-FR');
  return (
    <div className="character">
      <h2>{character.nickname}</h2>
      <p> Né(e) le : {formattedBirthDate} </p>
      {character.deathDate &&  <p>Mort(e) le : {character.deathDate}</p>}
      <p>{character.abstract}</p>
    </div>
  );
};

export default Character;
