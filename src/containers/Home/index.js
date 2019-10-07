import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>{this.props.list.map((item)=>{
          return <div key={item.id}>{item.title}</div>
        })}</div>
        <button onClick={()=>{alert('peko')}}>click</button>
      </div>
    )
  }

  componentDidMount() { //只会在客户端渲染时被执行
    this.props.getHomeList()
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.newsList
  }
}

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)