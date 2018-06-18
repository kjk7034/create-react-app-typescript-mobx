// import autobind from 'autobind-decorator'
import { inject, observer } from 'mobx-react'
import * as React from 'react'
import Home from '../components/Home'
import { IUserStore } from '../stores/userStore'

interface HomeContainerProps {
  userStore: IUserStore
}

@inject('userStore')
@observer
class HomeContainer extends React.Component<HomeContainerProps, {}> {
  public render() {
    const userInfo = this.props.userStore.getUser()
    return (
      <div>
        <Home userInfo={userInfo} />
      </div>
    )
  }
}

export default HomeContainer
