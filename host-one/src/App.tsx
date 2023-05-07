import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Login } from 'remote/Login';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Login onClick={(username: String, password: String) => alert(`${username}, ${password}`)}/>
    </>
  )
}

export default App
