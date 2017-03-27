import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Fieldset, Control, actions} from 'react-redux-form'
import _ from 'lodash'

@connect(
  (state) => ({
    initializeData: _.cloneDeep(state.savedUser)
  }),
  (dispatch) => ({
    initializeForm: (data) => dispatch(actions.load('uci', data))
  })
)
export default class TestForm extends Component {
  componentWillMount () {
    const {initializeForm, initializeData} = this.props
    initializeForm(initializeData)
  }

  render () {
    return (
      <Form model='user' onSubmit={console.log}>
        <Fieldset model='.address'>
          <Control.text model='.city' />
          <Control.text model='.cityNotExist' />
        </Fieldset>
        <button>Submit</button>
      </Form>
    )
  }
}
