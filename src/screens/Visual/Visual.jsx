import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { Styles } from './styles'
import { Gui } from './gui'

export default function Visual({ children, index, itemInfo, setItem }) {

    const setBounds = (e, left, top, width, height) => {
        setItem({ top: top, left: left, width: width, height: height })
    }

    const init = () => {
        var p = document.getElementById(`pane_${index}`)
        var gp = document.getElementById(`ghostpane_${index}`)
        
        Gui(p, gp, setBounds)
    }

    const effect = () => { init() }
    useEffect(effect, [])


    return (
        <Col lg={12}>
            <div id={`pane_${index}`} style={{...Styles.pane, ...itemInfo}}>
                <div style={Styles.title} id="title">  </div>
                {children}
            </div>
            <div style={{...Styles.ghostPane, ...itemInfo}} id={`ghostpane_${index}`}></div>
        </Col>
    )
}
