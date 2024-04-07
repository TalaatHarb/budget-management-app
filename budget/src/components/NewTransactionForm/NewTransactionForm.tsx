import React from 'react'
import { Header, Form } from 'semantic-ui-react'
import OKCancelButtons from '../shared/OKCancelButtons/OKCancelButtons'

function NewTransactionForm() {
  return (
    <>
      <Header as='h3'>Add new Transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            placeholder='New Transaction'
            label='Description'
            icon='tags'
            width={12}
          />
          <Form.Input
            placeholder='100.00'
            label='Value'
            icon='dollar'
            iconPosition='left'
            width={4}
          />
        </Form.Group>
        <OKCancelButtons />
      </Form>
    </>
  )
}

export default NewTransactionForm