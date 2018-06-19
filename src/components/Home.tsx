import { observer } from 'mobx-react'
import * as React from 'react'
import { IUser } from '../stores/userStore'

interface HomeProps {
  userInfo: IUser
}

@observer
export class Home extends React.Component<HomeProps, {}> {
  public render() {
    const { name, age } = this.props.userInfo

    return (
      <div className={'App-container'}>
        <section>
          <h1>홈!!</h1>
          <p>이름 : {name}</p>
          <p>나이 : {age}</p>
        </section>
      </div>
    )
  }
}
export default Home
