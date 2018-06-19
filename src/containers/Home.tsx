import { inject, observer } from 'mobx-react'
import * as React from 'react'
import Home from '../components/Home'
import Page from '../components/Page'
import { IUserStore } from '../stores/userStore'

interface HomeContainerProps {
  userStore?: IUserStore
}

@inject('userStore')
@observer
class HomeContainer extends React.Component<HomeContainerProps, {}> {
  public render() {
    const store = this.props.userStore as IUserStore
    const { userInfo } = store
    return (
      <Page title={'Home'}>
        <Home userInfo={userInfo} />
      </Page>
    )
  }
}

export default HomeContainer
