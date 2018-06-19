import * as React from 'react'
import { Helmet } from 'react-helmet'
import ActivityIndicator from './ActivityIndicator'

const Page = (props: any): JSX.Element => {
  return (
    <div className="App-container">
      {props.title && (
        <Helmet>
          <title>{props.title}</title>
        </Helmet>
      )}
      {props.children}
      {props.isLoading && <ActivityIndicator />}
    </div>
  )
}

export default Page
