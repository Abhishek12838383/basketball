import React from 'react'
import './Card.css'

const Card = ({img,name,position,min,assists,points,steal}) => {
  return (
    <div className='card'>

        <div className="card-img">
            <img src={img} alt="" />
        </div>

        <div className="card-detail">
                <div className="card-name">{name} |</div>
            <div className="card-position">{position}</div>
        </div>

<div className="card-stats">
    <div className="stat-1">
        <div className="min">
            {min}
            <div className='minn'>MINUTES</div>
        </div>
        <div className="assist">
            {assists}
            <div className='minn'>ASSISTS</div>
        </div>
    </div>
<hr />
    <div className="stat-2">
        <div className="points">
            {points}
            <div className='minn'>POINTS</div>
        </div>
        <div className="steal">
            {steal}
            <div className='minn'>STEAL</div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Card