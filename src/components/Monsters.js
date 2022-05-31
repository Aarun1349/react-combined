import React, { useState, useEffect } from 'react'
import MonsterCard from '../components/MonsterCard'
function Monsters() {
  const [monsters, setMonsters] = useState([])
  const [search, setSearch] = useState('')

  const getMonsters = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await response.json()
    setMonsters(await response.json());
    console.log(monsters)

  }
  useEffect(() => {
    getMonsters();
  }, []);

  const searchMonsters = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
    const searched = monsters.filter((elem) => {
      return elem.name.toLowerCase().includes(e.target.name.toLowerCase())
    })

    console.log("searched:", searched)
    setMonsters(searched)


  }

  return (
    <div className="container">
      <h1 className="heading1" style={{ textAlign: "center" }}> Monsters</h1>
      <input className='form-control' type="text" style={{ marginBottom: "2rem" }} placeholder='search monster' value={search} onChange={(e) => {
        searchMonsters(e)
      }}></input>

      <div className="row">
        {
          monsters.map((monster) => {
            return <MonsterCard monster={monster} />
            // return <h2>{monster.name}</h2>
          })
        }

      </div>

    </div>

  );
}



export default Monsters