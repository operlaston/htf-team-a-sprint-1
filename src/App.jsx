import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <nav className = "navigation_bar">
        <ul className = "navigation_list">
          <li> <button className = "nav_button">Button1</button></li>
          <li> <button className = "nav_button">Button2</button></li>
          <li> <button className = "nav_button">Button3</button></li>
          <li> <button className = "nav_button">Button4</button></li>
        </ul>
      </nav>
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count * 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <footer className="footer">
        <p>© 2024</p>
      </footer>
    </>
  )
}

export default App
