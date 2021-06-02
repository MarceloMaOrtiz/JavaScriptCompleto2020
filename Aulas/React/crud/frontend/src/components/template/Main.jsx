import "./Main.css"
import Header from "./Header"

import React from 'react'

function propsMain(props) {
    return <React.Fragment>
        <Header {...props}></Header>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>
}

export default propsMain