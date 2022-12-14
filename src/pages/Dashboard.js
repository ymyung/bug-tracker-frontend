import React, { useEffect, useState } from 'react'

import DummyData from "../components/DummyData"

import BarChart from "../components/BarChart"
import LineChart from "../components/LineChart"
import PieChart from "../components/PieChart"
import FlowChart from '../components/FlowChart'
import "./Dashboard.scss"

const Dashboard = () => {
    // graphType: Which graph to render
    // allGraphs: Array of all graphs
    const [graphType, setGraphType] = useState("date-graph")
    const [allGraphs, setAllGraphs] = useState([])

    // Graph Button Classes
    const [dateButton, setDateButton] = useState('graph-button-date-on')
    const [priorityButton, setPriorityButton] = useState('graph-button-priority')
    const [typeButton, setTypeButton] = useState('graph-button-type')
    const [historyButton, setHistoryButton] = useState('graph-button-history')

    // userData: Dummy data for graphs
    const [userData, setUserData] = useState({
        labels: DummyData.map(item => item.date),
        datasets: [
            {
            label: "datasets label",
            data: DummyData.map(item => item.count),
            backgroundColor: [
                'rgba(214, 26, 234, 0.8)',
                'rgba(105, 201, 222, 0.8)',
                'rgba(234, 26, 26, 0.8)'
            ],
            borderColor: [
                'rgba(105, 201, 222, 0.8)'
            ]
        }
        ]
    })

    // Change which graph to render on click
    const changeGraph = (type) => {
        setGraphType(type)

        // Delete this
        setUserData(userData)
    }

    // Load all graphs on refresh
    useEffect(() => {
        setAllGraphs(["date-graph", "priority-graph", "type-graph", "history-graph"])
    }, [])

    const colorDateButton = () => {
        setDateButton('graph-button-date-on')
        setPriorityButton('graph-button-priority')
        setTypeButton('graph-button-type')
        setHistoryButton('graph-button-history')
    }
    
    const colorPriorityButton = () => {
        setDateButton('graph-button-date')
        setPriorityButton('graph-button-priority-on')
        setTypeButton('graph-button-type')
        setHistoryButton('graph-button-history')
    }   

    const colorTypeButton = () => {
        setDateButton('graph-button-date')
        setPriorityButton('graph-button-priority')
        setTypeButton('graph-button-type-on')
        setHistoryButton('graph-button-history')
    }

    const colorHistoryButton = () => {
        setDateButton('graph-button-date')
        setPriorityButton('graph-button-priority')
        setTypeButton('graph-button-type')
        setHistoryButton('graph-button-history-on')
    }

    // Type of Graphs to Render
    const renderGraphs = (graph) => {
        if (graph === "date-graph") {
            return (
                // Date: Bar graph
                <BarChart chartData={userData} />
            )
        } else if (graph === "priority-graph") {
            return (
                // Priority: Pie graph
                <PieChart chartData={userData} />
            )
        } else if (graph === "type-graph") {
            return (
                // Type: Flow chart, Bug, UI, Performance
                <FlowChart />
            )
        } else if (graph === "history-graph") {
            return (
                // History: Line graph, resolved/new
                <LineChart chartData={userData} />
            )
        } else {
            return
        }
    }

    // Render the page
    return (
        <div className="dashboard">
            <div className="graph-buttons-container">
                <button type='button' onClick={() => {changeGraph("date-graph"); colorDateButton()}} className={dateButton}>Date</button>
                <button type='button' onClick={() => {changeGraph("priority-graph"); colorPriorityButton()}} className={priorityButton}>Priority</button>
                <button type='button' onClick={() => {changeGraph("type-graph"); colorTypeButton()}} className={typeButton}>Type</button>
                <button type='button' onClick={() => {changeGraph("history-graph"); colorHistoryButton()}} className={historyButton}>History</button>
            </div>
            <div className="graphs-container">
                {
                    allGraphs.map((graph) => {
                        if (graphType === graph) {
                            return renderGraphs(graph)
                        } else {
                            return <div></div>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard