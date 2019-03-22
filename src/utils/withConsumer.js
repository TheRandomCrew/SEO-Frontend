import React from 'react'
import appContext from '../../utils/appContext'

const { Consumer } = appContext

const withConsumer = ({ stateKey, stateAction }) => {
  return (
    <Consumer>
      {({ state, actions }) => (
        <Fragment>
          <span>{state['number']}</span>
          <button onClick={actions.mutNumber}>+</button>
        </Fragment>
      )}
    </Consumer>
  )
}

export default withConsumer
