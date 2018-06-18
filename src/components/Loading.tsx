import * as React from 'react'
import { LoadingComponentProps } from 'react-loadable'
import ActivityIndicator from './ActivityIndicator'

const Loading: React.SFC<LoadingComponentProps> = props => {
  if (props.error) {
    return <div>Error!</div>
  }
  return <ActivityIndicator />
}
export default Loading
