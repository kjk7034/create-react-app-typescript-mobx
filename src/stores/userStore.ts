import { computed, observable } from 'mobx'

export type IUser = {
  name: string
  age: number
}

export type IUserStore = {
  userInfo: IUser
}

export class UserStore {
  @observable private name: string
  @observable private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  @computed
  public get userInfo(): IUser {
    return {
      name: this.name,
      age: this.age
    }
  }
}

export default new UserStore('Wise', 38)
