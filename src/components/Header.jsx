import { AppBar, Box, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import React from 'react'


const useStyles=makeStyles((theme)=>({
    appBar:{
        backgroundColor:'#00008B',
        position:'static',

    },
    toolBar:{
        justifyContent:'space-between',
    },
    appHeader:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    logoText:{
        color:'yellow',
        fontWeight:'bold',
        cursor:'pointer'
    },
    formControl:{
        backgroundColor:'white',
        width:200,
        borderRadius:10,
    },select:{
        height:35
    },
    inputLabel:{
        marginLeft:70,
    }
}))


function Header() {
    const classes=useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Typography
                className={classes.logoText}
                variant='h4'
                >
                    Covid 19 Tracker
                </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>Country</InputLabel>
        <Select
          className={classes.select}
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    
            </Toolbar>
        </AppBar>
    )
}

export default Header
