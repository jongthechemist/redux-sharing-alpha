import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { getCurrentTime } from '../action/timeAction'


// const Time = ({time, getCurrentTime}) => {
//   if(!time) getCurrentTime();
//   return (
//     <p>{String(time)}</p>
//   )
// }

class Time extends React.Component {

  componentDidMount() {
    setTimeout(()=> {
      this.props.getCurrentTime()
    }, 1000)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.time !== this.props.time)
      setTimeout(()=> {
        this.props.getCurrentTime()
      }, 1000)
  }

  render() {
    const { time } = this.props
    return (<p>{String(time)}</p>)
  }
}

const mapStateToProps = ({ time }) => {
  return { time }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCurrentTime
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Time)