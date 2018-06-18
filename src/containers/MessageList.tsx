// import autobind from 'autobind-decorator'
import { inject, observer } from 'mobx-react'
import * as React from 'react'
import MessageList from '../components/List'
import Page from '../components/Page'
import { IMessageStore } from '../stores/messageStore'

interface MessageContainerProps {
  messageStore: IMessageStore
}

@inject('messageStore')
@observer
class MessageContainer extends React.Component<MessageContainerProps, {}> {
  public componentWillMount() {
    this.props.messageStore.getMessageList()
  }
  public render() {
    const { messageList, isLoading } = this.props.messageStore
    return (
      <Page isLoading={isLoading}>
        <MessageList datas={messageList} />
      </Page>
    )
  }
}

export default MessageContainer
