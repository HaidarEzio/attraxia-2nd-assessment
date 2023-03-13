/* eslint-disable @typescript-eslint/default-param-last */
// import { CounterReducerState, ReducerAction } from './counter.types'

export interface APIReducerState {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

interface ReducerAction {
  type: string
  payload: APIReducerState[]
}

const initState = []

const callingAPIReducer = (
  state = initState,
  { type, payload }: ReducerAction
) => {
  switch (type) {
    case 'CALL_API':
      return { ...state, user: payload }
    default:
      return state
  }
}

export default callingAPIReducer
