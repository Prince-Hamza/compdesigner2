import React from 'react'

export default function Button({ styles }) {
    return (
        <button style={{ ...Styles.Button, ...Styles.Item, ...styles }}>
            Button
        </button>
    )
}

const Styles = ({
    Item: {
        width: '99.5%',
        height: '92.5%',
        zIndex: '-1'
    },
    Button: {
        backgroundColor: 'white',
        border: 'solid 1px'
    }
})