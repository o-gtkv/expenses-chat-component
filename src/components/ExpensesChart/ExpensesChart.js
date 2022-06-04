import React from 'react'
import PropTypes from 'prop-types'
import Head from './Head/Head'
import Body from './Body/Body'
import style from './ExpensesChart.scss'

const ExpensesChart = ({ currentBalance, spendingThisMonth, spendingLastMonth, spendingLast7Days }) => {
    return (
        <div className={style.expensesChart}>
            <Head balance={currentBalance} />
            <Body {...{ spendingThisMonth, spendingLastMonth, spendingLast7Days }} />
        </div>
    )
}

ExpensesChart.propTypes = {
    currentBalance: PropTypes.number.isRequired,
    spendingThisMonth: PropTypes.number.isRequired,
    spendingLastMonth: PropTypes.number.isRequired,
    spendingLast7Days: PropTypes.array.isRequired,
}

export default ExpensesChart