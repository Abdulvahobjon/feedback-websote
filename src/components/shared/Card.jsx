import React from 'react'

function Card({children , reverse}) {
  return (
    <div   className={`card  ${reverse ? "reverse" : null} ` }>{children}</div>
  )
}

Card.defaultProps ={
    reverse: false
}

export default Card