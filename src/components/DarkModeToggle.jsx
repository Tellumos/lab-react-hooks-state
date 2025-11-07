import React, { useState } from 'react'

function DarkModeToggle() {
  const [mode, toggle] = useState("Dark")
  function setMode() {
    toggle(mode === "Light" ? "Dark" : "Light")
  }
  

  return (
    <button onClick = {setMode}>Toggle {mode} Mode</button>
  )
}

export default DarkModeToggle
