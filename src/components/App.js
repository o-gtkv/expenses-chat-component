import React from 'react'
import ExpensesChart from './ExpensesChart/ExpensesChart'
import data from '../../data.json'

const App = () => {
    return (
        <ExpensesChart
            currentBalance={921.48}
            spendingThisMonth={478.33}
            spendingLastMonth={400.78}
            spendingLast7Days={data}
        />
    )
}

export default App