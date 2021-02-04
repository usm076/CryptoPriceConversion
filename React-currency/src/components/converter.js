import React from 'react'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './pogo.png'
import Chogo from './Chogo.png'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '10px 12px',
      display: 'flex',
      alignItems: 'center',
      width: 500,
      
      boxShadow: "0 0 20px 0 rgb(0 0 0 / 30%)"
    },
    
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: "transparent",
      color: "#000", 
      boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.1)"
      
      
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
  
export default function Converter() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <div className="nav-tags" style={{display : "flex", flexGrow: 1}}>
              <img src={Chogo} height="40px" width="40px"/>
              <a class="font-weight-bold">Swap</a>
              <a>Pool</a>
              <a>UNI</a>
              <a>Vote</a>
              <a>Charts</a>
          </div>
         
          <div className="d-flex" >
             <a className="btn btn-uni">UNI</a>
             <a className="btn btn-connect-2">
                  Connect Wallet
                </a>
               
          </div>
          
        </Toolbar>
      </AppBar>
        <div class="container" style={{position: 'relative'}}>
             <Typography component="p" variant="p" className="emp-tag " style={{position: 'absolute' , top : 20 , left: 20}}>
             Swap
            </Typography>
            <i class="fa fa-cogs" style={{position: 'absolute' , top : 20 , right: 20}} aria-hidden="true"></i>
        <div class="currency">
          <div className="d-flex mt-4">
           <img src={Logo} className="mt-2" height="25px" width="25px"/>
            <select name="" id="input_currency">
                            <option value="COP">COP</option>
                            <option value="CZK">CZK</option>
                            <option value="DKK">DKK</option>
                            <option value="DOP">DOP</option>
                            <option value="EGP">EGP</option>
                            <option value="EUR" selected>ETH</option>
                            <option value="FJD">FJD</option>
                            <option value="GBP">GBP</option>
                            <option value="SAR">SAR</option>
                            <option value="SEK">SEK</option>
                            <option value="SGD">SGD</option>
                            <option value="THB">THB</option>
                            <option value="TRY">TRY</option>
                            <option value="TWD">TWD</option>
                            <option value="UAH">UAH</option>
                            <option value="USD">USD</option>
                            <option value="UYU">UYU</option>
                            <option value="VND">VND</option>
                            <option value="ZAR">ZAR</option>
            </select>
            </div>
            <div class="text-left input-tox">
            <Typography component="p" variant="p" className="emp-tag up" style={{marginTop : 6}}>
             From
            </Typography>
            <input type="number" name="" class="ip1" id="input_amount" placeholder="0.0"/>
            </div>
        </div>
        <button id="exchange">
                ↕   
            </button>
        <div class="currency">
            <select name="" id="output_currency" class="special">
                    <option value="SEK">SEK</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="TRY">TRY</option>
                    <option value="TWD">TWD</option>
                    <option value="UAH">UAH</option>
                    <option value="USD" selected disabled>Select a token</option>
                    <option value="UYU">UYU</option>
                    <option value="VND">VND</option>
                    <option value="ZAR">ZAR</option>
            </select>   
             <div class="text-left input-box">
            <Typography component="p" variant="p" className="emp-tag up" style={{marginTop : 6}}>
             To
            </Typography>
            <input type="number"  class="ip2" name="" id="input_amount" placeholder="0.0"/>
            </div>
        </div>
        <div class="result">
                <a className="btn btn-connect">
                  Connect Wallet
                </a>
        </div>
        
    </div>
    </React.Fragment>
    )
}
