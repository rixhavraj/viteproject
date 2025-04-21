import { useState } from 'react'

import './App.css'
import './component/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className='bg-green-700'>helloooo</h1>
      <header />

    </>
  )
}

export default App
