import { inject, observer } from 'mobx-react'
import * as React from 'react'
import Page from '../components/Page'
import MessageView from '../components/View'
import { IMessageStore } from '../stores/messageStore'

interface MessageContainerProps {
  messageStore: IMessageStore
  match: any
  history: any
}

@inject('messageStore')
@observer
class MessageContainer extends React.Component<MessageContainerProps, {}> {
  public componentWillMount() {
    this.props.messageStore.getMessageView(
      Number(this.props.match.params.viewId)
    )
  }
  public render() {
    const { messageDetail, isLoading } = this.props.messageStore
    return (
      <Page isLoading={isLoading}>
        <MessageView data={messageDetail} goBack={this.props.history.goBack} />
      </Page>
    )
  }
}

export default MessageContainer
