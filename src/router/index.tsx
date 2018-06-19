import DevTools from 'mobx-react-devtools'
import * as React from 'react'
import * as Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading'

import '../styles/app.css'
import '../styles/common.css'

const Home = Loadable({
  loader: () => import('../containers/Home'),
  loading: Loading
})

const MessageList = Loadable({
  loader: () => import('../containers/MessageList'),
  loading: Loading
})

const MessageView = Loadable({
  loader: () => import('../containers/MessageView'),
  loading: Loading
})

const NotFound = Loadable({
  loader: () => import('../components/NotFound'),
  loading: Loading
})
class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/message/:viewId" component={MessageView} />
          <Route path="/message" component={MessageList} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        <DevTools />
      </div>
    )
  }
}
export default App
