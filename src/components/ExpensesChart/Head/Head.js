import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import style from './Head.scss'

const Head = (props) => {
    return (
        <div className={style.head}>
            <div className={cn(style.info)}>
                <div className={cn(style.infoTitle)}>My balance</div>
                <div className={cn(style.infoBalance)}>{`$${props.balance}`}</div>
            </div>
            {/* <div> */}
            <div className={cn(style.circles)}>
                <div className={cn(style.circle, style.circle1)}></div>
                <div className={cn(style.circle, style.circle2)}></div>
            </div>
            {/* </div> */}
        </div>
    )
}

Head.propTypes = {
    balance: PropTypes.number.isRequired
}

export default Head