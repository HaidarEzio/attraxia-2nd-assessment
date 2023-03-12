import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux'

import reactLogo from './assets/react.svg'
import './App.css'

interface State {
  myCounter: {
    counter: number
  }
}

function App() {
  // Get counter from counterReducer
  const counter = useSelector<State, number>((state) => state.myCounter.counter)

  // Use for all the dispatch actions
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          type="button"
          onClick={() => dispatch({ type: 'INCREMENT_COUNT' })}
        >
          count is {counter}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  )
}

export default App
