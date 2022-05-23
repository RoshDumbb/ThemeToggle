import React, { useState } from 'react'
import "./Toggle.css"
const Toggle = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle)
    }
  return (
      <div>
          <p className={toggle ? "main":"con"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt debitis reiciendis accusantium voluptatem, omnis consequuntur magni magnam cupiditate tempora fuga animi! Dicta optio asperiores iste recusandae et tenetur iure.</p>
        <button onClick={handleClick}>change</button>
      </div>
  )
}

export default Toggle