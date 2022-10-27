import React from 'react'

export default function Button({ styles, onClick }) {
    return (
        <button style={{ ...Styles.Button, ...Styles.Item, ...styles }} onClick={() => { onClick() }}>
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
        backgroundColor: '#222',
        border: 'solid 1px'
    }
})