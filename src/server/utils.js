import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import getStore from '../store'

export const render = (req) => {

  const store = getStore()
  

  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  ))

  return `
  <html>
   <head>
   <title>ssr</title>
   </head>
   <body>
     <div id="root">${content}</div>
   </body>
   <script src="/index.js"></script>
  </html>
  `
}