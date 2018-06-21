import { action, observable, runInAction } from 'mobx'
import { getMessage } from '../api/message'
export type IMessage = {
  userId?: number
  id?: number
  title?: string
  body?: string
}

export type IMessageStore = {
  isLoading: boolean
  error: any
  loadMessagePosts: () => void
  loadMessage: (id: number) => void
  messageList: IMessage[]
  messageDetail: IMessage
}

class MessageStore {
  @observable public messageList: IMessage[] | undefined
  @observable public messageDetail: IMessage | undefined
  @observable public isLoading: boolean
  @observable public error: any
  constructor() {
    this.messageList = undefined
    this.messageDetail = undefined
    this.isLoading = false
    this.error = undefined
  }
  @action
  public async loadMessagePosts() {
    this.messageList = undefined
    this.isLoading = true
    try {
      const messages = await getMessage()
      runInAction('loadMessagePosts succesed', () => {
        this.messageList = messages.data
        this.isLoading = false
      })
    } catch (error) {
      runInAction('loadMessagePosts fail', () => {
        this.error = error
        this.isLoading = false
      })
    }
  }
  @action
  public async loadMessage(id: number) {
    this.messageDetail = undefined
    this.isLoading = true
    try {
      const messages = await getMessage(id)
      runInAction(() => {
        this.messageDetail = messages.data
        this.isLoading = false
      })
    } catch (error) {
      runInAction(() => {
        this.error = error
        this.isLoading = false
      })
    }
  }
}

export default new MessageStore()
