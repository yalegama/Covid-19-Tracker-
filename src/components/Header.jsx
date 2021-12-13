import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import React from 'react'


const useStyles=makeStyles((theme)=>({
    appBar:{
        backgroundColor:'#00008B',
        position:'static',
        
    }
}))


function Header() {
    const classes=useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                This is will be Header
            </Toolbar>
        </AppBar>
    )
}

export default Header
