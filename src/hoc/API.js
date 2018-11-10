import React from 'react'
import axios from 'axios'

export default (Component) => {
  return class extends React.Component {
    render() {
      return (
        <Component/>
      )
    }
  }
}