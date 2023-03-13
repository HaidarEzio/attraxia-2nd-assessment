import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCount } from 'store/counter/counter.actions'
import { callAPI } from 'store/callingAPI/callingAPI.action'

import { bindActionCreators } from 'redux'

import reactLogo from './assets/react.svg'
import './App.css'

interface APIReducerState {
  id: number
  name: string
  email: string
  phone: string
  website: string
}
interface State {
  myCounter: {
    counter: number
  }
  users: {
    user: APIReducerState
  }
}

function App() {
  // Get counter from counterReducer
  const counter = useSelector<State, number>(
    ({ myCounter }) => myCounter.counter
  )
  const user = useSelector<State, APIReducerState>((state) => state.users.user)

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
        <button type="button" onClick={() => dispatch(incrementCount(56))}>
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
        <Button
          variant="contained"
          onClick={() => dispatch({ type: 'DECREMENT_COUNT' })}
        >
          minus
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch({ type: 'RESET_COUNT' })}
        >
          Reset
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch({ type: 'SET_COUNT', payload: 7 })}
        >
          7
        </Button>
        <Button variant="outlined" onClick={() => dispatch(callAPI())}>
          Call API
        </Button>
      </Stack>
      {user && (
        <Stack spacing={1}>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </Stack>
      )}
    </div>
  )
}

export default App
