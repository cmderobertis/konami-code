import React, { useState } from "react"
import CodeDisplay from "./components/CodeDisplay"
import "./App.css"

function App() {
  const [codeCompleted, setCodeCompleted] = useState(false)

  return (
    <div className="App">
      <CodeDisplay setCodeCompleted={setCodeCompleted} />
      {codeCompleted ? <h1>Konami Code? What a nerd 😋</h1> : <h1> </h1>}
    </div>
  )
}

export default App
