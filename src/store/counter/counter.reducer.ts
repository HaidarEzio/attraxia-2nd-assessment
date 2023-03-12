import { CounterReducerState, ReducerAction } from './counter.types'

const initState: CounterReducerState = {
  counter: 0,
}

// eslint-disable-next-line @typescript-eslint/default-param-last
const counterReducer = (state = initState, action: ReducerAction) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT_COUNT':
      return { ...state, counter: state.counter - 1 }
    case 'RESET_COUNT':
      return { ...state, counter: 0 }
    default:
      return state
  }
}

export default counterReducer
