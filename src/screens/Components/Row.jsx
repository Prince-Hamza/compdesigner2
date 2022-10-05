import React from 'react'

export default function Row({ children, styles }) {
    return (
        <div style={{ ...Styles.Item, ...Styles.Col, ...styles }}>
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid 1px'
    }
})