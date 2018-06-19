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
  getMessageList: () => void
  getMessageView: (id: number) => void
  messageList: IMessage[]
  messageDetail: IMessage
}

class MessageStore {
  @observable public messageList: IMessage[] | undefined
  @observable public messageDetail: IMessage | undefined
  @observable public isLoading: boolean
  constructor() {
    this.messageList = undefined
    this.messageDetail = undefined
    this.isLoading = false
  }
  @action
  public async getMessageList() {
    this.messageList = undefined
    this.isLoading = true
    // runInAction(() => {
    //   this.isLoading = true
    // })
    try {
      const messages = await getMessage()
      runInAction(() => {
        this.messageList = messages.data
        this.isLoading = false
      })
    } catch (error) {
      runInAction(() => {
        this.messageList = undefined
        this.isLoading = false
      })
    }
  }
  @action
  public async getMessageView(id: number) {
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
        this.messageDetail = undefined
        this.isLoading = false
      })
    }
  }
}

export default new MessageStore()
