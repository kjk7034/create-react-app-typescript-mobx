import { observer } from 'mobx-react'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { IMessage } from '../stores/messageStore'

interface ListProps {
  datas: IMessage[]
}

function list(props: ListProps) {
  const datas = props.datas
  if (!datas) {
    return null
  }
  return (
    <div className="">
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

export default observer(list)
