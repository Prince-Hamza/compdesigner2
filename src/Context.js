import { createContext } from 'react'
import Button from './screens/Components/Button'
import Column from './screens/Components/Col'
import Row from './screens/Components/Row'

export const AppContext = createContext()

export const AppInfo = ({
    toolbox: [
        {
            name: 'Col',
            Core: Column,
            styles: {
                top: '0px',
                left: '0px',
                width: '100px',
                height: '100px',
            },
            children: []
        },
        {
            name: 'Row',
            Core: Row,
            styles: {
                top: '0px',
                left: '0px',
                width: '100px',
                height: '100px',
            },
            children: []

        },
        {
            name: 'Button',
            Core: Button,
            styles: {
                top: '0px',
                left: '0px',
                width: '100px',
                height: '100px',
            },
            children: []
        },
    ],
    design: [

    ]
})