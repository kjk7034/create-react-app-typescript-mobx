import { action, observable } from 'mobx'

export type IUser = {
  name: string
  age: number
}

export type IUserStore = {
  getUser(): IUser
}

class UserStore {
  @observable private name: string
  @observable private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  @action
  public getUser(): IUser {
    return {
      name: this.name,
      age: this.age
    }
  }
}

export default new UserStore('Wise', 38)
