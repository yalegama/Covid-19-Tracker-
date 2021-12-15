
import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header'
import InfoBox from '../components/InfoBox'
import Map from '../components/Map';
import RightSide from '../components/RightSide';

const useStyles=makeStyles((theme)=>({
    infoBoxContent:{
        display:'flex',
        justifyContent:'space-evenly',
        marginTop:40,
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    },
    body:{
    },
    bodyContent:{
        display:'flex',
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    },leftSide:{
        width:"70%",
    }
}))

function HomePage() {
    const classes=useStyles();
    return (
        <div className={classes.body}>
<Header/>
            <div className={classes.bodyContent}>
            
               <div className={classes.leftSide}>
                    
                    <div className={classes.infoBoxContent}>
                        <InfoBox  title="Country" description="population" population={5000}/>
                        <InfoBox  title="Corona Virus Cases" cases={123} total={2000}/>
                        <InfoBox  title="Recoverd" cases={1234} total={3000}/>
                        <InfoBox  title="Deaths" cases={12345} total={4000}/>
                    </div>
                  <div className="map">
                  <Map/>
                  </div>
                </div>

               <div className="rightSide"></div>
               <RightSide/>
               </div>
        </div>
    )
}

export default HomePage
