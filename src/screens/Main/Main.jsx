import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import Visual from '../Visual/Visual'

export default function Main() {

    const [AppInfo, setAppInfo] = useState([
        {
            top: '50px',
            left: '50px',
            width: '150px',
            height: '300px'
        },
        {
            top: '50px',
            left: '250px',
            width: '150px',
            height: '300px'
        }
    ])

    const setInfo = (info, index) => {
        AppInfo[index] = info
        setAppInfo(AppInfo)
        console.log(`info : ${JSON.stringify(AppInfo)}`);
    }

    return (
        <Col lg={12}>
            {AppInfo.map((item, index) => {
                return (
                    <Visual key={Math.random()} index={index} item={item} setItem={setInfo} />
                )
            })}

        </Col>
    )
}
