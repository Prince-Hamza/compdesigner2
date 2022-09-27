import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import Visual from '../Visual/Visual'

export default function Main() {
    return (
        <Col lg={12}>
            <Visual index={0} />
            <Visual index={1} />
        </Col>
    )
}
