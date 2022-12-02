import {useState} from 'react'
import Card from './shared/Card'
import {FaTimes} from "react-icons/fa"

function FeedbackItem({item , hamdleClick}) {

  
    
  return (
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        <button className='close '>
          <FaTimes onClick={()=> hamdleClick(item.id)} color="purple"/>
        </button>
        <div className="text-display">
            {item.text}
        </div>
    </Card>
  )
}

export default FeedbackItem