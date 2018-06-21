import { inject, observer } from 'mobx-react'
import * as React from 'react'
import Page from '../components/Page'
import MessageView from '../components/View'
import { IMessageStore } from '../stores/messageStore'

interface MessageContainerProps {
  messageStore?: IMessageStore
  match: any
  history: any
}

@inject('messageStore')
@observer
class MessageContainer extends React.Component<MessageContainerProps, {}> {
  public componentWillMount() {
    const store = this.props.messageStore as IMessageStore
    store.loadMessage(Number(this.props.match.params.viewId))
  }
  public render() {
    const store = this.props.messageStore as IMessageStore
    const { messageDetail, isLoading, error } = store
    const title = messageDetail ? messageDetail.title : undefined
    return (
      <Page title={title} error={error} isLoading={isLoading}>
        <MessageView data={messageDetail} goBack={this.props.history.goBack} />
      </Page>
    )
  }
}

export default MessageContainer
