import * as React from 'react'
import ActivityIndicator from './ActivityIndicator'

const Page = (props: any): JSX.Element => {
  return (
    <div className="App-container">
      {props.children}
      {props.isLoading && <ActivityIndicator />}
    </div>
  )
}

export default Page
