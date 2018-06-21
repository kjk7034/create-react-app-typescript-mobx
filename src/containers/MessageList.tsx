import { inject, observer } from 'mobx-react'
import * as React from 'react'
import MessageList from '../components/List'
import Page from '../components/Page'
import { IMessageStore } from '../stores/messageStore'

interface MessageContainerProps {
  messageStore?: IMessageStore
  history: any
}

@inject('messageStore')
@observer
class MessageContainer extends React.Component<MessageContainerProps, {}> {
  public componentWillMount() {
    const store = this.props.messageStore as IMessageStore
    if (
      this.props.history.action === 'PUSH' ||
      store.messageList === undefined
    ) {
      store.loadMessagePosts()
    }
  }
  public render() {
    const store = this.props.messageStore as IMessageStore
    const { messageList, isLoading, error } = store
    return (
      <Page title={'List'} error={error} isLoading={isLoading}>
        <MessageList datas={messageList} />
      </Page>
    )
  }
}

export default MessageContainer
