import React from 'react'
import { getTranslationList } from './store/actions'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

class Translation extends React.Component {

  getList() {
    const {list} = this.props
    return list.map(item=><div key={item.id}>{item.title}</div>)
  }

  componentDidMount() {
    if(!this.props.list.length) {
      this.props.getTranslationList()
    }
  }
  render() {
    if(this.props.login) {
      return (
        <div>
          {this.getList()}      
        </div>
      )
    }else {
      return <Redirect to='/'></Redirect>
    }
  }
}

Translation.loadData = (store) => {
  return store.dispatch(getTranslationList(store))
}

const mapState = state => ({
  list: state.translation.translationList,
  login: state.header.login
})

const mapDispatch = dispatch=>({
  getTranslationList() {
    dispatch(getTranslationList())
  }
})

export default connect(mapState,mapDispatch)(Translation)