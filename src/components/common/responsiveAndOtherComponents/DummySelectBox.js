import React,{Fragment} from 'react'

function DummySelectBox() {
    return (
        <Fragment>
            <div className="select-dummy-wrapper">
            <select id="compute-select">
                <option id="compute-option">All</option>
            </select>
            </div>
        </Fragment>
    )
}

export default DummySelectBox
