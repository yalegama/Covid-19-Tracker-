import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles((theme)=>({
    card:{
        height:150,
        width:210,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f5f6fa',
        margin:10
    },
    cardContent:{
        alignItems:'center',
        justifyContent:'center'
    }
}))

function InfoBoxes({title,cases,total,title2,title3,title4}) {
    const classes=useStyles()
    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography
                color='secondary'
                >   {title}
                </Typography>
                <h2>{total}</h2>
                <br />
                <Typography
                color='primary'
                >   {title2}{title3}{title4}
                </Typography>
                <h2>{cases}</h2>
            </CardContent>
        </Card>
    )
}

export default InfoBoxes
