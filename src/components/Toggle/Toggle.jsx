import React, { useState } from 'react'


function Toggle({ children }){

  const [on, setOn] = useState(false)
  
  function handleToggle(){
    setOn(!on)
  }

  return children({on, handleToggle})
}

export default Toggle