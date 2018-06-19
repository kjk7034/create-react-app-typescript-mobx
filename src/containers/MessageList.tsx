import { inject, observer } from 'mobx-react'
import * as React from 'react'
import MessageList from '../components/List'
import Page from '../components/Page'
import { IMessageStore } from '../stores/messageStore'

interface MessageContainerProps {
  messageStore: IMessageStore
  history: any
}

@inject('messageStore')
@observer
class MessageContainer extends React.Component<MessageContainerProps, {}> {
  public componentWillMount() {
    if (
      this.props.history.action === 'PUSH' ||
      this.props.messageStore.messageList === undefined
    ) {
      this.props.messageStore.getMessageList()
    }
  }
  public render() {
    const store = this.props.messageStore as IMessageStore
    const { messageList, isLoading } = store
    return (
      <Page isLoading={isLoading} title={'List'}>
        <MessageList datas={messageList} />
      </Page>
    )
  }
}

export default MessageContainer
