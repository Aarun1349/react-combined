import React, { useState, useEffect } from 'react'
import MonsterCard from '../components/MonsterCard'
function Monsters() {
  const [monsters, setMonsters] = useState([])
  const [search, setSearch] = useState('')
  const [fileteredMonsters, setFilteredMonsters] = useState([])
  const getMonsters = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await response.json()
    setMonsters(await response.json());
    // console.log(monsters)

  }
  useEffect(() => {
    getMonsters();
  }, []);

  useEffect(() => {
    console.log("search",search)
    const newFilteredMonsters =  monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(search)
    })
    setFilteredMonsters(newFilteredMonsters)
  
    
  }, [monsters,search])
  
  const searchMonsters = (e) => {
    e.preventDefault();
    
    setSearch(e.target.value.toLocaleLowerCase())
    // const searched = monsters.filter((elem) => {

    //   console.log(elem.name.toLowerCase().includes(e.target.name.toLowerCase()))
    //   return elem.name.toLowerCase().includes(e.target.name.toLowerCase())
    // })

    // // console.log("searched:", searched)
    // setMonsters(searched)


  }

  return (
    <div className="container">
      <h1 className="heading1" style={{ textAlign: "center" }}> Monsters</h1>
      <input className='form-control' type="text" style={{ marginBottom: "2rem" }} placeholder='search monster' value={search} onChange={(e) => {
        searchMonsters(e)
      }}></input>

      <div className="row">
        {
          fileteredMonsters.map((monster) => {
            return <MonsterCard  key ={monster.id}monster={monster} />
            
          })
        }

      </div>

    </div>

  );
}



export default Monsters