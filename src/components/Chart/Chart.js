import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import style from './Chart.scss'
import gstyle from '../../index.scss'

const Chart = ({ spendingLast7Days }) => {
    const maxIdx = spendingLast7Days.reduce((max, item, i) => {
        if (spendingLast7Days[max].amount < item.amount)
            return i
        return max
    }, 0)
    return (
        <div className={cn(style.chart)}>
            {
                spendingLast7Days.map((item, i) => {
                    return (
                        <div key={i}>
                            <div className={cn(style.chartScales)}>
                                <div
                                    className={cn(style.chartScale)}
                                    style={{
                                        height: item['amount'] * (200 / 100),
                                        backgroundColor: i === maxIdx ? '#76b5be' : '#ec755d'
                                    }}
                                >
                                </div>
                            </div>
                            <div className={cn(gstyle.taCenter)}>{item['day']}</div>
                        </div>
                    )
                })
            }
        </div >
    )
}

Chart.propTypes = {
    spendingLast7Days: PropTypes.array.isRequired
}

export default Chart