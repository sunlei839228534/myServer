import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import {renderRoutes} from 'react-router-config'
import { StaticRouter,Route} from 'react-router-dom'

export const render = (store,Routes,req) => {


  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  ))
  return( `
  <html>
   <head>
   <title>ssr</title>
   </head>
   <body>
     <div id="root">${content}</div>
     <script>
       window.context = {
         state: ${JSON.stringify(store.getState())}
       }
     </script>
   </body>
   <script src="/index.js"></script>
  </html>`)
}