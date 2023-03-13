// ? this here is a thunk action creator, since it returns a function

export const incrementCount = (amount: number) => {
  return (dispatch) => {
    dispatch({
      type: 'INCREMENT_COUNT',
      payload: amount,
    })
  }
}
