/* eslint-disable @typescript-eslint/default-param-last */
import { CounterReducerState, ReducerAction } from './counter.types'

const initState: CounterReducerState = {
  counter: 0,
}

const counterReducer = (
  state = initState,
  { type, payload }: ReducerAction
) => {
  switch (type) {
    case 'INCREMENT_COUNT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT_COUNT':
      return { ...state, counter: state.counter - 1 }
    case 'RESET_COUNT':
      return { ...state, counter: 0 }
    case 'SET_COUNT':
      return { ...state, counter: payload }
    default:
      return state
  }
}

export default counterReducer
