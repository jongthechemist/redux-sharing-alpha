import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onChangeInput, onGuessGender } from '../action/formAction'

const Form = ({ input, gender, name, onChangeInput, onGuessGender, title }) => (
  <>
    <h1>{title}</h1>
    <input 
      type="text" 
      value={input}
      onChange={(event)=>onChangeInput(event.target.value)}
      />
    <button onClick={onGuessGender}>Guess!</button>
    <p>{name} {name==='I'?'am':'is'} {gender}</p>
  </>
)

const mapStateToProps = ({form}) => {
  return { ...form }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    onChangeInput,
    onGuessGender 
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Form)