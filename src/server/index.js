import express from 'express'
import { render } from './utils'
import {getStore} from '../store'
import { matchRoutes } from 'react-router-config'
import Routes from '../Routes'


const app = express()
app.use(express.static('public'))//静态路由

app.get('*',function (req,res) {

  const store = getStore();

  const matchedRoutes = matchRoutes(Routes,req.path)
  //结合当前用户请求地址和路由做判断
  //如果用户访问/路径,我们就拿home组件的异步数据
  //如果用户访问/login路径,我们就拿login组件的异步数据

  const promises = []

  matchedRoutes.forEach(item => {
    if(item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(()=>{
    res.send(render(store,Routes,req))
  })
})


const server = app.listen('3000',()=>{
  console.log('server is running in localhost3000')
})