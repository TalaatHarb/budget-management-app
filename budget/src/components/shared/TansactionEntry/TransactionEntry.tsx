import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'

function TransactionEntry({isExpense = true, description = 'Purchase', value = '0.00'}) {
    return (
        <Segment color={isExpense ? 'red' : 'green'}>
            <Grid columns={3} textAlign='right' divided>
                <Grid.Row>
                    <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
                    <Grid.Column width={3} textAlign='right'>{value}</Grid.Column>
                    <Grid.Column width={3} textAlign='right'>
                        <Icon name='edit' bordered></Icon>
                        <Icon name='trash' bordered></Icon>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default TransactionEntry