import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import Visual from '../Visual/Visual'
import Button from '../Components/Button'
import Column from '../Components/Col'
import Row from '../Components/Row'

export default function Main() {

    const [AppInfo, setAppInfo] = useState([
        {
            name: 'Col',
            Core: Column,
            top: '50px',
            left: '50px',
            width: '1200px',
            height: '500px',
            children: [
                {
                    name: 'Bt',
                    Core: Row,
                    top: '50px',
                    left: '50px',
                    width: '10px',
                    height: '50px',
                    children: [
                        {
                            name: 'Col',
                            Core: Button,
                            top: '50px',
                            left: '50px',
                            width: '1200px',
                            height: '500px',
                        },
                        {
                            name: 'Col',
                            Core: Button,
                            top: '50px',
                            left: '50px',
                            width: '1200px',
                            height: '500px',
                        }
                    ]
                },


                {
                    name: 'Bt',
                    Core: Row,
                    top: '50px',
                    left: '50px',
                    width: '10px',
                    height: '50px',
                    children: [
                        {
                            name: 'Col',
                            Core: Button,
                            top: '50px',
                            left: '50px',
                            width: '1200px',
                            height: '500px',
                        },
                        {
                            name: 'Col',
                            Core: Button,
                            top: '50px',
                            left: '50px',
                            width: '1200px',
                            height: '500px',
                        }
                    ]
                }


            ]
        }
    ])

    const [nestedItem] = useState({ width: '99.5%', height: '92.5%' })

    const setInfo = (info, index) => {
        AppInfo[index] = info
        setAppInfo(AppInfo)
        console.log(` info : ${JSON.stringify(AppInfo)}`)
    }

    return (
        <Col lg={12}>
            {AppInfo.map((Item, index) => {
                return (
                    <Visual key={Math.random()} index={index} item={Item} setItem={setInfo}>
                        <Item.Core>
                            {Item.children && Item.children.map((NestedItem) => {
                                return (
                                    <NestedItem.Core>
                                        {NestedItem.children && NestedItem.children.map((NestedItem2) => {
                                            return (
                                                <NestedItem2.Core>
                                                    {NestedItem2 && NestedItem2.children && NestedItem2.children.map((NestedItem3) => {
                                                        return (
                                                            <NestedItem3.Core>
                                                                
                                                            </NestedItem3.Core>
                                                        )
                                                    })}
                                                </NestedItem2.Core>
                                            )
                                        })}
                                    </NestedItem.Core>
                                )
                            })}
                        </Item.Core>
                    </Visual>
                )
            })}

            {/* <Visual key={Math.random()} item={AppInfo[0]} setItem={setInfo} >
                <Column>
                    <Row>
                        <Button>
                            helllooo
                        </Button>
                        <Button>
                            helllooo
                        </Button>
                        <Button>
                            helllooo
                        </Button>
                    </Row>
                </Column>
            </Visual> */}

        </Col>
    )
}
