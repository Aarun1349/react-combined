import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function MonsterDetails() {
  const location = useLocation();
  let monsterId = location.state.monsterId;
  const [monster, setMonster] = useState([])
  const [image, setImage] = useState('')
  console.log("monsterId:", location)

  const getMonsters = async () => {
    if (monsterId === undefined) { monsterId = 1 }
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${monsterId}`);
    // const data = await response.json()
    setMonster(await response.json());
    setImage(`https://robohash.org/${monsterId}?set=set2&size=180x180`)


  }
  useEffect(() => {
    getMonsters();
  }, []);

  return (
    <div className='container'><h1 className='heading1' style={{ textAlign: "center" }}>{monster.name}</h1>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'><img src={image} alt={image}></img></div>
        <div className='col-md-4'></div>
      </div>
    </div>
  )
}

export default MonsterDetails