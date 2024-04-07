import React from 'react'
import { Statistic } from 'semantic-ui-react'

function BalanceDisplay() {
    return (
        <Statistic size='small'>
            <Statistic.Label>Your Balance:</Statistic.Label>
            <Statistic.Value>2,550.53</Statistic.Value>
        </Statistic>
    )
}

export default BalanceDisplay