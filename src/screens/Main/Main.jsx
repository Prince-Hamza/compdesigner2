import React, { useState, useContext } from 'react'
import { Col } from 'react-bootstrap'
import Visual from '../Visual/Visual'
import Button from '../Components/Button'
import Column from '../Components/Col'
import Row from '../Components/Row'
import { AppContext } from '../../Context'
import { Content } from '../../styles/styles'
import StyleBar from '../styleBar/StyleBar'


export default function Main() {

    const { appInfo, setAppInfo } = useContext(AppContext)
    const [showToolbox, setShowToolbox] = useState(false)
    const [showStylebar, setShowStylebar] = useState(true)

    const [cursor, setcursor] = useState({ top: 0, left: 0 })
    const [selectedItem, setSelectedItem] = useState()


    const setInfo = (info, index) => {
        appInfo[index] = info
        setAppInfo(appInfo)
        console.log(` info : ${JSON.stringify(appInfo)}`)
    }

    const handleDoubleClick = (e) => {
        setShowToolbox(true)
        setcursor({ top: e.clientY, left: e.clientX })

        setTimeout(() => {
            setShowToolbox(false)
        }, 3000)
    }

    const insertItem = (index) => {

        if (selectedItem) {
            alert(JSON.stringify(selectedItem))
            selectedItem.children.push(appInfo.toolbox[index])
        } else {
            appInfo.design.push(appInfo.toolbox[index])
        }

        setAppInfo({ ...appInfo })

    }


    const stylize = (styles) => {
        Object.assign(selectedItem.styles, styles)
        setSelectedItem({ ...selectedItem })
        setAppInfo({ ...appInfo })
    }

    const select = (item) => {
        setSelectedItem(item)
    }

    return (
        <Col lg={12} style={Styles.container}>

            <Col lg={4} style={{ ...Styles.Preview, ...Content.colCentrify }} onDoubleClick={(e) => { handleDoubleClick(e) }} >
                {appInfo.design.map((Item, index) => {
                    return (
                        <Item.Core key={Math.random()} styles={Item.styles} onClick={() => { select(Item) }}>
                            {Item.children && Item.children.map((NestedItem, nestedIndex) => {
                                return (
                                    <NestedItem.Core styles={NestedItem.styles} onClick={() => {
                                        select(`nested1:click : ${JSON.stringify(NestedItem)}`)
                                    }}>
                                        {NestedItem.children && NestedItem.children.map((NestedItem2, nestedIndex2) => {
                                            return (
                                                <NestedItem2.Core styles={NestedItem2.styles} onClick={() => { select(NestedItem2) }}>
                                                    {NestedItem2 && NestedItem2.children && NestedItem2.children.map((NestedItem3, nestedIndex3) => {
                                                        return (
                                                            <NestedItem3.Core styles={NestedItem3.styles} onClick={() => { select(NestedItem3) }}>


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
                    )
                })}
            </Col>

            <br />

            {showToolbox &&
                <Col lg={2} style={{ ...Styles.optionsWrap, top: cursor.top, left: cursor.left }}>
                    {appInfo.toolbox.map((item, index) => {
                        return (
                            <div style={Styles.optionRow} onClick={() => { insertItem(index) }}>
                                {item.name}
                            </div>
                        )
                    })}

                </Col>
            }

            {showStylebar && <StyleBar stylize={stylize} />}


        </Col>
    )

}

const Styles = ({
    container: {
        backgroundColor: 'lightgray',
        height: window.screen.height - 100,
        zIndex: -1,
        ...Content.colCentrify
    },
    Preview: {
        backgroundColor: 'white',
        boxShadow: '0px 0px 8px 1px rgb(150,150,150)',
        height: '700px',
        zIndex: 0
    },
    optionsWrap: {
        position: 'absolute',
        backgroundColor: 'whitesmoke',
        boxShadow: '0px 0px 8px 1px rgb(150,150,150)',
        height: 'auto',
        overflow: 'auto',
        zIndex: 1
    },
    optionRow: {
        width: '100%',
        height: '30px',
        border: 'solid 1px lightgray'
    },

})