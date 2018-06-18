import { observer } from 'mobx-react'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { IMessage } from '../stores/messageStore'

interface ViewProps {
  data: IMessage
  goBack?: () => void | undefined
}

@observer
export class View extends React.Component<ViewProps, {}> {
  constructor(props: ViewProps) {
    super(props)
  }
  public render() {
    const data = this.props.data
    if (!data) {
      return null
    }
    return (
      <div className="">
        <Helmet>
          <title>View Title11</title>
        </Helmet>
        <h1>제목 : {data.title}</h1>
        <button type="button" onClick={this.props.goBack}>
          이전
        </button>
        <h2>글번호</h2>
        <p>{data.id}</p>
        <h2>작성자</h2>
        <p>{data.userId}</p>
        <h2>내용</h2>
        <p>{data.body}</p>
      </div>
    )
  }
}
export default View
