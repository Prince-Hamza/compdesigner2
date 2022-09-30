import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import Visual from '../Visual/Visual'

export default function Main() {

    const [AppInfo, setAppInfo] = useState({
        top: '0px',
        left: '0px'
    })

    return (
        <Col lg={12}>
            <Visual index={0} item={AppInfo} setItem={setAppInfo} />
            <Visual index={1} item={AppInfo} setItem={setAppInfo} />
        </Col>
    )
}
