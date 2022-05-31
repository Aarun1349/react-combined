import React from 'react'
import { useNavigate } from 'react-router-dom'

function MonsterCard({ monster }) {
    const navigate = useNavigate();
    let image = `https://robohash.org/${monster.id}?set=set2&size=180x180`
    const handleClick = (id) => {
        return navigate('/monsterdetails', { state: { monsterId: id } })
    }
    return (
        <div className="col-md-3 col-sm-10">
            {monster ? <div className="card" style={{ width: "13rem", marginBottom: "2rem" }}>
                <img src={image} className="card-img-top" alt="monster" />
                <div className="card-body">
                    <btn className="card-text" onClick={() => { handleClick(monster.id) }}>
                        {monster.name}
                    </btn>
                </div>
            </div > : "No monster to display"
            }

        </div >
    )
}

export default MonsterCard