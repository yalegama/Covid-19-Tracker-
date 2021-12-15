import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles((theme)=>({
    
    card:{ 
        webkitBoxShadow: "0px 0px 26px -4px #000000",
    boxShadow: "0px 0px 26px -4px #000000",
    width:"20%",
    
    [theme.breakpoints.down('sm')]:{
        width:"70%",
        margin:10,
        marginLeft:100
    }
    },
    cases:{
        fontWeight:'bold'
    }
}))

function InfoBox({title,cases,total,description,population}) {

    const classes=useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography
                color='secondary'
                >
                    {title}
                </Typography>
                <Typography
                className={classes.cases}
                variant='h4'>
                    {cases}
                </Typography>
                <Typography>
                    {total}
                </Typography>
                <Typography>
                    {description}
                </Typography>
                <Typography>
                    {population}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
