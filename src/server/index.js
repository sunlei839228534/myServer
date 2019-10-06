import express from 'express'
import { render } from './utils'

const app = express()
app.use(express.static('public'))//静态路由

app.get('*',function (req,res) {
  res.send(render(req))
})


const server = app.listen('3000',()=>{
  console.log('server is running in localhost3000')
})