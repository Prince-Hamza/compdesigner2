import { createContext } from 'react'
import Button from './screens/Components/Button'
import Column from './screens/Components/Col'
import Row from './screens/Components/Row'

export const AppContext = createContext()

export const AppInfo = ({
    Toolbox: {

    },
    Design: [
        {
            name: 'Col',
            Core: Column,
            top: '50px',
            left: '50px',
            width: '1200px',
            height: '500px',
            styles: {},
            children: [
                {
                    name: 'Bt',
                    Core: Row,
                    top: '50px',
                    left: '50px',
                    width: '10px',
                    height: '50px',
                    styles: {},
                    children: [
                        {
                            name: 'Col',
                            Core: Button,
                            top: '50px',
                            left: '50px',
                            width: '1200px',
                            height: '500px',
                            styles: {
                                width: '50px'
                            }
                        },
                        {
                            name: 'Col',
                            Core: Button,
                            top: '50px',
                            left: '50px',
                            width: '1200px',
                            height: '500px',
                            styles: {
                                width: '50px'
                            }
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
                    styles: {},
                    children: [
                        {
                            name: 'Col',
                            Core: Button,
                            top: '50px',
                            left: '50px',
                            width: '1200px',
                            height: '500px',
                            styles: {
                                width: '50px'
                            }
                        },
                        {
                            name: 'Col',
                            Core: Button,
                            top: '50px',
                            left: '50px',
                            width: '1200px',
                            height: '500px',
                            styles: {
                                width: '50px'
                            }
                        }
                    ]
                }


            ]
        }
    ]
})