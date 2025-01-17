// src/App.jsx
import { useState } from "react";
import './App.css';
import Fighter from "./components/Fighter.jsx"

const App = () => {
  const [zombieFighter, setZombieFighter] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]
  
  )
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
    } else {
      console.log('You cannot afford this character!');
    }
  };

  const handleRemoveFighter = (index, price) => {
    const newTeam = [...team];
    newTeam.splice(index, 1);
    setTeam(newTeam);
    setMoney(money + price);
  };

  return (
    <>
    <h1>Welcome to Zombie Land!</h1>
    <h2>Current balance:  {money}</h2>
    <div className="currentTeam">
      <h2>Squad</h2>
      {team.length === 0 ? (
          <li><em>Add Characters to your Squad!</em></li>
        ) : (
          team.map( (fighter, index) => (
            <li key={index}>
              <Fighter {...fighter} />
              <button onClick={() => handleRemoveFighter(index)}>Remove</button>
            </li>
          ))
        )}
    </div>

    <div className="characterData">
      <h2>Fighters</h2>
        <ul>
          {zombieFighter.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt="#" />
              <p>{fighter.name}</p>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
    </div>
    </>
  );
}

export default App
