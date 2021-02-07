import React, {useState} from 'react'
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
  const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
    const classes = useStyles();
    const axios = require('axios');
    const [result, setResult] = useState(null);
    const [state, setState] = useState({
		
      //input_currency_type: 'USD',
      input_currency_amount : 0,
      //output_currency_type : 'BTC',
      output_currency_amount :0
      
      
      });
      const [type, setType] = useState({
        inputType : 'USD', 
        outputType : 'BTC'
      });

      const onTypeChange = event =>{ // This function is called whenever user changes Input or output currency type. This function sets the new value for input/output type variables
        setResult({
          success: true
          
          });
        const {name, value} =event.target;
        

        setType({
          ...type,
          [name] : value
        });
      }

      const  onInputChange = async event => { // This function is called whenever user changes Input Amount. This function sets the new value for input amount variables
       
        const { name, value } = event.target;
        
      
         setState({
          ...state,
          [name]: value
        });
        var config = {
            method: 'get',
            url: 'https://api.cryptonator.com/api/ticker/'+type.outputType+'-'+type.inputType, // This API fetches data from cryptonator according to pair provided
            
          };
          
          await axios(config)
          .then(function (response) {

           
            if(response.data.success) // If API return some value successfully
            {
                setState({
                  input_currency_amount : value,
                output_currency_amount : value/response.data.ticker.price // This line sets the result of conversion in output amount field
                })
            }
            else // If the API isn't successful or User have selected same input output currency
            {
              setResult({
                success: false,
                message: 'Please select different currencies'
                });
            }
           })
          .catch(function (error) { 
            console.log("This is error : "+error);
          });
        

        };

        // This returns the frontend view to show to users
    return (
        <React.Fragment>
            <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <div className="nav-tags" style={{display : "flex", flexGrow: 1}}>
              <img src={Chogo} height="40px" width="40px"/>
              <a class="font-weight-bold">Swap</a>
              <a>Pool</a>
              
          </div>
         
          <div className="d-flex" >
            
             <a className="btn btn-connect-2">
                  Contact US
                </a>
               
          </div>
          
        </Toolbar>
      </AppBar>
        <div class="container" style={{position: 'relative'}}>
             <Typography component="p" variant="p" className="emp-tag " style={{position: 'absolute' , top : 20 , left: 20}}>
             Swap
            </Typography>
            {result && ( //The error is displayed using this state variable i.e. Result
                <p className={`${result.success ? 'success' : 'error'}`}>
                {result.message}
                </p>
                )}
            <i class="fa fa-cogs" style={{position: 'absolute' , top : 20 , right: 20}} aria-hidden="true"></i>
        <div class="currency">
              
              {/* Input currency list */}
              <select name="inputType" className="special" onChange={onTypeChange}  value={type.inputType}> {/* OnTypeChange is called whenever input currency is changed*/}
                <option value="USD" selected>USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
              </select>
              {/* Input currency list ends here*/}

            
            <div class="text-left input-box">
            <Typography component="p" variant="p" className="emp-tag up" style={{marginTop : 6}}>
             From
            </Typography>
            <input  name="input_currency_amount" class="ip2"  onInput={onInputChange}  value={state.input_currency_amount}/> {/* OnInputChange is called whenever input amount is changed*/}
            </div>
        </div>
        <button id="exchange">
                  
            </button>
        <div class="currency">
            {/* Outputcurrency list */}
            <select name="outputType"  class="special" onChange={onTypeChange}  value={type.outputType}> {/* OnTypeChange is called whenever output currency is changed*/}
                <option value="BTC" selected>BTC</option>
                <option value="ETH">ETH</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="USD">USD</option>
            </select>  
            {/* Outputcurrency list ends here*/} 
             <div class="text-left input-box">
            <Typography component="p" variant="p" className="emp-tag up" style={{marginTop : 6}}>
             To
            </Typography>
            <input type="number"  class="ip2" name="output_currency_amount" id="abc"    value={state.output_currency_amount}/>
            </div>
        </div>
        {/* <div class="result">
                <a className="btn btn-connect">
                  Connect Wallet
                </a>
        </div> */}
        
    </div>
    </React.Fragment>
    )
}
