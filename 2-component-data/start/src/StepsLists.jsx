import React from 'react'
import ReactDom from 'react-dom'
import StepTitle from './StepTitle'

function StepLists(props) {
    const stepListItems = props.steps.map((step, index) => {
        return (
            <li index={index}>
                {step.todo}
            </li>
        )
    })

    return (
        <ol>
            {stepListItems}
        </ol>
    )
}

function StepComponent(props) {
    return (
        <React.Fragment>
            <StepTitle />
            <StepLists steps={props.steps} />
        </React.Fragment>
    )
}

export default StepComponent