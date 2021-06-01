import React from 'react'

function childrenWithProps(props) {
    // Importante lembrar de colocar o return
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}

export { childrenWithProps }