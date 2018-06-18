import { configure } from 'mobx'
import { Provider } from 'mobx-react'
import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './router'
import Store from './stores'

configure({
  enforceActions: true
})

const App: React.SFC<{}> = () => (
  <Provider {...Store}>
    <Router>
      <AppRouter />
    </Router>
  </Provider>
)
export default App
