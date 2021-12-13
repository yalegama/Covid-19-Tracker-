import { AppBar, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import React, { useState,useEffect } from 'react'


const useStyles=makeStyles((theme)=>({
    appBar:{
        backgroundColor:'#00008B',
        position:'static',
        height:100,
        justifyContent:'center'

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
        height:35,
    },
    inputLabel:{
        marginLeft:70,
    },
}))


function Header() {

    const [countries, setcountries] = useState([]);
    const [selectCountry, setselectCountry] = useState('Select Country')

/**request url
 * 
 * https://disease.sh/v3/covid-19/countries
 */


useEffect(()=>{
    const getContriesData=async()=>{
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response)=>response.json())
        .then((data)=>{
            const countries=data.map((country)=>(
                {
                    name:country.country,
                    value:country.countryInfo.iso2,
                    flag:country.countryInfo.flag
                }
            ));
            setcountries(countries)
        })
    }
    getContriesData()
},[]);


const onCountryChange=(event)=>{
    const countryCode=event.target.value;

    console.log(countryCode);

    setselectCountry(countryCode)
}


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
        <InputLabel className={classes.inputLabel}>{selectCountry}</InputLabel>
        <Select
        onChange={onCountryChange}
          className={classes.select}
          value={selectCountry}
        >

            {
                countries.map((country)=>(
                    <MenuItem value={country.value}> <img height={15} width={25} src={country.flag} alt="" /> {country.name}  </MenuItem>
                ))
            }

        </Select>
      </FormControl>
    
            </Toolbar>
        </AppBar>
    )
}

export default Header
