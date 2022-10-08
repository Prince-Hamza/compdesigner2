import React from 'react'

export default function Column({ children, styles,onClick }) {

    return (
        <div style={{ ...Styles.Item, ...Styles.Col, ...styles }} onClick={() => { onClick() }}>
            {children}
        </div>
    )
    
}

const Styles = ({
    Item: {
        width: '99.5%',
        height: '92.5%',
    },
    Col: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 1px'
    }
})