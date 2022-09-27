
export const Styles = ({
    pane: {
        position: 'absolute',
        width: '45%',
        height: '45%',
        top: '20%',
        left: '20%',
        margin: '0',
        padding: '0',
        zIndex: '99',
        border: '1px solid limegreen',
        background: '#fefefe'
    },
    ghostPane: {

        background: '#999',
        opacity: '0.2',
        width: '45%',
        height: '45%',
        top: '20%',
        left: '20%',
        position: 'absolute',
        margin: '0',
        padding: '0',
        zIndex: '98',
        webkitTransition: 'all 0.25s ease -in -out',
        mozTransition: 'all 0.25s ease -in -out',
        msTransition: 'all 0.25s ease -in -out',
        oTransition: 'all 0.25s ease -in -out',
        transition: 'all 0.25s ease -in -out'
    },
    title: {
        fontFamily: 'monospace',
        background: 'limegreen',
        color: 'white',
        fontSize: '24px',
        width:'60px',
        height: '20px',
        borderBottomRightRadius:'50px',
        textAlign: 'center',
        cursor: 'move'
    }
})