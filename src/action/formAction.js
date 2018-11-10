export const CHANGE_INPUT = 'CHANGE_INPUT'
export const onChangeInput = (input) => ({
  type: CHANGE_INPUT,
  payload: {
    input
  }
})

export const GUESS_GENDER = 'GUESS_GENDER'
// export const onGuessGender = (input) => ({
//   type: GUESS_GENDER,
//   payload: fetch(`https://api.genderize.io/?name=${input}`)
//   .then((response)=>response.json())
//   .then((result)=>result)
// })

export const onGuessGender = () => {
  return (dispatch, getState) => {
    const { form : {input} } = getState()
    fetch(`https://api.genderize.io/?name=${input}`)
    .then((response)=>response.json())
    .then((result)=>{
      //update store with result
      dispatch({
        type: GUESS_GENDER,
        payload: result
      })
      //clear the input
      dispatch(onChangeInput(''))
    })
  }
}