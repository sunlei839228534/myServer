import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'

const Home = ({name}) => {
  return (
    <div>
      <Header />
      This is {name}
      <button onClick={()=>{alert('peko')}}>click</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps,null)(Home)