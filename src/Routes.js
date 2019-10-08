import React from 'react'
import {Route} from 'react-router-dom'
import Home from './containers/Home'
import Login from  './containers/Login'

export default [
  {
    path: '/',
    key: 'home',
    component: Home,
    exact: true,
    loadData: Home.loadData,
  },
  {
    path: '/login',
    component: Login,
    key: 'login',
    exact: true
  }
];