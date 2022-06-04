import React from 'react'
import PropTypes from 'prop-types'
import Chart from '../../../components/Chart/Chart'
import cn from 'classnames'
import style from './Body.scss'
import gstyle from '../../../index.scss'

const Body = ({ spendingThisMonth, spendingLastMonth, spendingLast7Days }) => {
    const percent = Math.abs(spendingLastMonth - spendingThisMonth) / (spendingThisMonth / 100)
    return (
        <div className={cn(style.body)}>
            <div className={cn(style.chartTitle)}>Spending - Last 7 days</div>
            <Chart spendingLast7Days={spendingLast7Days} />
            <hr className={cn(style.hr)} />
            <div className={cn(style.info)}>
                <div>
                    <div className={cn(style.infoText)}>Total this month</div>
                    <div className={style.infoSum}>
                        <div className={style.infoSumCol1}>{`$${spendingThisMonth}`}</div>
                        <div className={cn(gstyle.taRight)}>
                            <div>
                                {
                                    spendingLastMonth < spendingThisMonth ? `+${percent.toFixed(2)}%` : `-${percent.toFixed(2)}%`
                                }
                            </div>
                            <div className={cn(style.infoText)}>from last month</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

Body.propTypes = {
    spendingThisMonth: PropTypes.number.isRequired,
    spendingLastMonth: PropTypes.number.isRequired,
    spendingLast7Days: PropTypes.array.isRequired,
}

export default Body