import { observer } from 'mobx-react'
import * as React from 'react'
import { IMessage } from '../stores/messageStore'

type ViewProps = {
  data: IMessage
  goBack?: () => void | undefined
}

function view(props: ViewProps) {
  const data = props.data
  if (!data) {
    return null
  }
  return (
    <div className="">
      <h1>제목 : {data.title}</h1>
      <button type="button" onClick={props.goBack}>
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

export default observer(view)
