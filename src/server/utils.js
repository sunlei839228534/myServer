import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter,Route} from 'react-router-dom'

export const render = (store,Routes,req) => {


  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{Routes.map(item=><Route key={item.key} {...item}/>)}</div>
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