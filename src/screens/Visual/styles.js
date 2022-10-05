
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
        WebkitTransition: 'all 0.25s ease -in -out',
        MozTransition: 'all 0.25s ease -in -out',
        MsTransition: 'all 0.25s ease -in -out',
        OTransition: 'all 0.25s ease -in -out',
        transition: 'all 0.25s ease -in -out'
    },
    title: {
        fontFamily: 'monospace',
        background: 'limegreen',
        color: 'white',
        fontSize: '24px',
        width:'60px',
        height: '15px',
        borderTopRightRadius:'25px',
        textAlign: 'center',
        cursor: 'move'
    }
})