import { observer } from 'mobx-react'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { IMessage } from '../stores/messageStore'

interface ListProps {
  datas: IMessage[]
}

@observer
export class List extends React.Component<ListProps, {}> {
  public render() {
    const datas = this.props.datas
    if (!datas) {
      return null
    }
    return (
      <div className="">
        <Helmet>
          <title>List Title11</title>
        </Helmet>
        <ul>
          {datas.map((v, i) => {
            return (
              <li key={i}>
                <Link to={`/message/${v.id}`}>
                  {v.id} {v.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default List
