import React from 'react'
import { Header } from 'semantic-ui-react'
import TransactionEntry from '../shared/TansactionEntry/TransactionEntry'

function TransactionHistory() {
    return (
        <>
            <Header as='h3'>
                History
            </Header>
            <TransactionEntry description='My Purchase details' value='$10.00' />
            <TransactionEntry description='Payment' value='$100.00' isExpense={false} />
            <TransactionEntry description='My other Purchase details' value='$20.00' />
        </>
    )
}

export default TransactionHistory