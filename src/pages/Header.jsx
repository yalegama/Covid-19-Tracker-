import { AppBar, Button, FormControl, Grid, makeStyles, MenuItem, MenuList, Select, Toolbar } from '@material-ui/core'
import { MenuOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import InfoBoxes from '../components/InfoBoxes'
import Map from '../components/Map'
import logo from "../images/logo.png"

const useStyles=makeStyles((theme)=>({
    body:{
        display:'block',
    },
    header:{
        
    },
    appBar:{
        position:'sticky'
    },
    toolBar:{
        backgroundColor:'white',
        justifyContent:'space-evenly',
        
        
    },
    logoSide:{
        display:'flex',
        alignItems:'center',
        
    },
    logoImage:{
        height:50,
        width:50,
        marginRight:5
    },
    logoText:{
        color:'black'
    },
    logoText2:{
        color:'red'
    },
    
    selectmenu:{
        margin:10
    },
    menuSide:{
        display:'flex',
        alignItems:'center',
        textDecoration:'none'
    },
    list:{
        textDecoration:"none",
        [theme.breakpoints.down("md")]:{
            display:'none'
        }
    },
    listButton:{
        textDecoration:'none',
        [theme.breakpoints.down("md")]:{
            display:'none'
        }
    },
    link:{
        textDecoration:'none',
        color:'#108885',
        fontWeight:"bold",
        margin:15
    },
    button:{
        backgroundColor:'#108885',
        color:'white',
        fontWeight:'bold',
        marginLeft:5
    },
    menuIcon:{
        backgroundColor:'black',
        [theme.breakpoints.up("md")]:{
            display:"none"
        }
    },
    flag:{
        height:30,
        width:40
    },select:{
        alignItems:'center',
        backgroundColor:'white',
        width:200
    },
    menuItem:{
        alignItems:'center'
    },infoBoxesArea:{
        display:'flex',
        marginTop:50
    },
    body2:{
        display:'flex'
    },homePage:{
        display:'flex'
    }
    
}))

function Header() {

    const [countries, setcountries] = useState([]);

    const [country, setcountry] = useState("select");

    const [countryInfo, setcountryInfo] = useState({})


    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
        .then((response)=>response.json())
        .then((data)=>{
            setcountryInfo(data)
        })
    }, [])
    
    useEffect(() => {
        const getCountriesData=async()=>{
            await fetch("https://disease.sh/v3/covid-19/countries")
            .then((response)=>response.json())
            .then((data)=>{
                const countries=data.map((country)=>({
                    name:country.country,
                    value:country.countryInfo.iso2,
                    flag:country.countryInfo.flag
                }));
                setcountries(countries)
            })
        }
        getCountriesData()
    }, [])


    const onCountryChange=async(event)=>{
        const countryCode=event.target.value;

        console.log(countryCode);

        setcountry(countryCode)

        const url=countryCode==='select' ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

        await fetch(url)
        .then(response=>response.json())
        .then(data=>{
            setcountryInfo(data);
        })
    };
    console.log(countryInfo)

    const classes=useStyles()
    return (
        <div className={classes.body}>
            <div className={classes.header}>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolBar}>
                    <div className={classes.logoSide}>
                        <img className={classes.logoImage} src={logo} alt="" />
                    <h1 className={classes.logoText}>Corona <span className={classes.logoText2}>Tracker</span></h1>
                    <div className={classes.selectmenu}>
                    <FormControl>
                        <Select
                        variant='outlined'
                        value={country}
                        onChange={onCountryChange}
                        className={classes.select}
                        >
                            <MenuItem value="select">Select</MenuItem>
                            {
                                countries.map((country)=>((
                                    <MenuItem className={classes.menuItem} value={country.value}><img className={classes.flag} src={country.flag} alt="" />{country.name}</MenuItem>
                                )))
                            }
                        </Select>
                    </FormControl>
                    </div>
                    </div>
                    <div className={classes.menuSide}>
                        <li className={classes.list}><a className={classes.link} href="">Home</a></li>
                        <li className={classes.list}><a className={classes.link} href="">What is Covid-19</a></li>
                        <li className={classes.list}><a className={classes.link} href="">Analytics</a></li>
                        <li className={classes.list}><a className={classes.link} href="">Blog</a></li>
                        <li className={classes.list}><a className={classes.link} href="">About</a></li>
                        <li className={classes.listButton}><Button className={classes.button}>Log</Button></li>
                        <li className={classes.listButton}><Button className={classes.button}>Register</Button></li>
                    </div>
                    <div className={classes.phoneMenu}>
                        <MenuOutlined className={classes.menuIcon}/>
                    </div>
                    
                    </Toolbar>
                </AppBar>
             </div>
             <div>
            </div>
            <div className={classes.body2}>
            <Grid container>
            <Grid item md={2} sm={0} ></Grid>
            <Grid item md={8} sm={12}><div className={classes.homePage}>
                <div className={classes.leftSide}>
                         <div className={classes.infoBoxesArea}>
                         <InfoBoxes title="Population" cases={countryInfo.todayCases} title2="Today Cases" total={countryInfo.population}/>
                         <InfoBoxes title="Total Recovered" cases={countryInfo.todayRecovered} title3="Today Recovered" total={countryInfo.recovered}/>
                         <InfoBoxes title="Total Deaths" cases={countryInfo.todayDeaths} title4="Today Deaths" total={countryInfo.deaths}/>
                         </div>
                   <div>
                    <Map/>
                   </div>
                </div>
                <div className={classes.rightSide}>
                    tables
                </div>
        </div></Grid>
            <Grid item md={2} sm={0}></Grid>
        </Grid>
            </div>
        </div>
    )
}

export default Header
