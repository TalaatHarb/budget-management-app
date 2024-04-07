import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import StatisticDisplay from '../shared/StatisticDisplay/StatisticDisplay'

function InOutSummary() {
    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column><StatisticDisplay title='Income' value='1,045.37' /></Grid.Column>
                    <Grid.Column><StatisticDisplay title='Expenses' value='623.05' color='red' /></Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default InOutSummary