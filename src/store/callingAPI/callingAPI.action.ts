export const callAPI = () => {
  return async (dispatch) => {
    const user = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        const { id, name, email, phone, website } = data[0]
        return { id, name, email, phone, website }
      })
    dispatch({
      type: 'CALL_API',
      payload: user,
    })
  }
}
