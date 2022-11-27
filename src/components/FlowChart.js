import React from 'react'

import "./FlowChart.scss"

const FlowChart = () => {
  return (
    <div className='flow-chart'>
        <div className="flow-chart--title">title</div>
        <div className="flow-chart--body">
            <div className="flow-chart--body-left">
                <div className="box-left box-left-top">box left</div>
                <div className="box-left box-left-middle">box left</div>
                <div className="box-left box-left-bottom">box left</div>
            </div>
            <div className="flow-chart--body-right">
                <div className="box-right">box right</div>
                <div className="box-right">box right</div>
                <div className="box-right">box right</div>
            </div>
        </div>
    </div>
  )
}

export default FlowChart