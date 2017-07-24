import React, { Component } from 'react'
import { connect } from 'react-redux'
//import thunks from where they are

class Main extends React.Component {
  componentDidMount(){
    // this.props.fetchInitialData()
  }
  render(){
    return (
      <div><h1>HERE WE ARE</h1></div>
    )

  }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
//   fetchInitialData: () => {
// dipatch thunks here
//     dispatch()
//   }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
