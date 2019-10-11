import React from 'react'
import {Route} from 'react-router-dom'
import App from './App'
import Home from './containers/Home'
import Translation from  './containers/Translation'

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    key: '/',
    routes: [
      {
        path: '/',
        key: 'home',
        component: Home,
        exact: true,
        loadData: Home.loadData,
      },
      {
        path: '/translation',
        component: Translation,
        loadData: Translation.loadData,
        key: 'Translation',
        exact: true
      }
    ]
  }
];