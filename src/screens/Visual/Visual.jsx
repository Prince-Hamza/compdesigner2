import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { Styles } from './styles'
import { Gui } from './gui'

export default function Visual({ children, index }) {

    const init = () => {
        var p = document.getElementById(`pane_${index}`)
        var gp = document.getElementById(`ghostpane_${index}`)
        Gui(p, gp)
    }

    const effect = () => { init() }
    useEffect(effect, [])


    return (
        <Col lg={12}>
            <div id={`pane_${index}`} style={Styles.pane}>
                <div style={Styles.title} id="title">  </div>
                {children}
            </div>
            <div style={Styles.ghostPane} id={`ghostpane_${index}`}></div>
        </Col>
    )
}
