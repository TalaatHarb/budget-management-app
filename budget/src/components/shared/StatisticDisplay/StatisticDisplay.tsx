import React from 'react';
import { SemanticCOLORS, Statistic } from 'semantic-ui-react';
import { StatisticSizeProp } from 'semantic-ui-react/dist/commonjs/views/Statistic/Statistic';

type StatisticDisplayProps = { size?: StatisticSizeProp, color?: SemanticCOLORS, title: string, value?: string };

function StatisticDisplay({ size = 'tiny', color = 'black', title, value = '0.00'}: Readonly<StatisticDisplayProps>) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{ textAlign: 'left' }}>{title}:</Statistic.Label>
            <Statistic.Value>{value}</Statistic.Value>
        </Statistic>
    )
}

export default StatisticDisplay