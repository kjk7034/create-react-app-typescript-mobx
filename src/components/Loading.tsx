import * as React from 'react'
import { LoadingComponentProps } from 'react-loadable'
import ActivityIndicator from './ActivityIndicator'

function loading(props: LoadingComponentProps) {
  if (props.error) {
    return <div>Error!</div>
  }
  return <ActivityIndicator />
}

export default loading
