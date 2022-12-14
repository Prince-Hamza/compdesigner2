import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useContext } from 'react'
import { AppContext } from '../../Context'
import { Content } from '../../styles/styles'

export default function StyleBar({ stylize }) {

    const { appInfo, setAppInfo } = useContext(AppContext)
    const [style, setStyle] = useState({})

    const onFile = (filesArray) => {

    }


    const updateStyle = (attrib, value) => {
        style[attrib] = value
        stylize(style)
    }

    return (
        <Col lg={2} style={Styles.styleOptionsWrap}>

            <div> backgroundImage </div>
            <input type="file" onChange={(e) => { onFile(e.target.files) }} />
            <input type="text" placeholder='image url here' />

            <br />
            <br />

            <Row>
                <div style={Styles.rowItem} > width </div>
                <input style={Styles.rowItem} type="number" onChange={(e) => { updateStyle('width', e.target.value + 'px') }} />
            </Row>

            <Row>
                <div style={Styles.rowItem} > height </div>
                <input style={Styles.rowItem} type="number" onChange={(e) => { updateStyle('height', e.target.value + 'px') }} />
            </Row>


        </Col>
    )
}

const Styles = ({
    styleOptionsWrap: {
        backgroundColor: 'white',
        boxShadow: '0px 0px 8px 1px rgb(150,150,150)',
        height: window.screen.height - 100,
        position: 'absolute',
        right: '1px',
        top: '1px'
    },
    rowItem: {
        width: '80px',
        marginRight: '10px',
        ...Content.colCentrify

    }
})
