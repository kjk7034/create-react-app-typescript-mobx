import * as React from 'react'
import { Helmet } from 'react-helmet'
import ActivityIndicator from './ActivityIndicator'
import Error from './Error'

function page(props: any) {
  return (
    <div className="App-container">
      {props.title && (
        <Helmet>
          <title>{props.title}</title>
        </Helmet>
      )}
      {props.children}
      {props.isLoading && <ActivityIndicator />}
      {props.error && <Error error={props.error} />}
    </div>
  )
}

export default page
