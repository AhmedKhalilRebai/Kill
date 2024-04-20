import React from 'react';
import Card from 'react-bootstrap/Card';
import players from './Players';



const Player = ({ player }) => {
  const { name, team, nationality, number, age, imageURL } = player;
  return (
    <Card>
      <img variant="top" src={imageURL} />
      <div>
        <h3>{name}</h3>
        <section>
          <p>Team : {team}</p>
          <p>Number : {number}</p>
          <p>Age : {age}</p>
          <p>National : {nationality}</p>
        </section>
      </div>
    </Card>
  );
}

export default Player;
