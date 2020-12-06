import { Button, FormControl, FormLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import {addIncome,addExpense} from '../Models/actions'

const useStyles=makeStyles((theme)=>({
    paper:{
        padding:theme.spacing(2)
    },
    formControl:{
        margin: theme.spacing(1),

    }
}))

function Input({addIncome,addExpense}) {
    const classes=useStyles()
    const [howMuch,setHowMuch]=useState("")
    const [forWhat,setForWhat]=useState("")
    const handleSelect = (val) =>{
        setSelectValue(val.target.value)
    }
    const handleHowmuch = (val) =>{
        setHowMuch(val.target.value)
    }
    const handleForWhat = (val) =>{
        setForWhat(val.target.value)
    }

    const [selectValue,setSelectValue]=useState("")

    const sendDataToSate=(e)=>{
        e.preventDefault();
        if(selectValue==="Income"){
            addIncome({reason:forWhat,amount:howMuch})
            setForWhat("")
            setSelectValue("")
            setHowMuch("")
        }else if(selectValue==="Expense"){
            addExpense({reason:forWhat,amount:howMuch})
            setForWhat("")
            setHowMuch("")
            setSelectValue("")
        }   
    }

    return (<Grid container  spacing={2}>
                <form style={{display:"flex"}}>               
                <Grid item xs={12} sm={3} lg={3} className={classes.paper}>
                <FormControl variant="filled" >
                <Select 
                        labelId="demo-simple-select-filled-label"
                        style={{width:165,height:40}} 
                        variant="outlined"
                        value={selectValue}
                        onChange={handleSelect}
                        placeholder="Select Type"
                    >
                       <MenuItem value="Income">Income</MenuItem>
                       <MenuItem value="Expense">Expense</MenuItem>
                   </Select>

                </FormControl>
                  
                </Grid>
                <Grid item xs={12} sm={3} lg={3} className={classes.paper}>
                    <TextField 
                        value={forWhat}
                        onChange={handleForWhat}
                        variant="outlined"
                        label="What's Up" 
                        id="inputType" 
                        size="small"
                        placeholder="What's Comming"
                    />
                </Grid>
                <Grid item xs={12} sm={3} lg={3} className={classes.paper}>
                    <TextField  
                        value={howMuch}
                        onChange={handleHowmuch}
                        variant="outlined"
                        label="HowMuch"
                        type="number" 
                        id="inputValue" 
                        size="small"
                        placeholder="How Much It is..."/>
                </Grid>
                <Grid item xs={12} sm={3} lg={3} className={classes.paper}>
                    <Button 
                        style={{height:40}} 
                        type="submit" 
                        onClick={sendDataToSate}  
                        variant="contained" 
                        fullWidth 
                    > Analyse </Button>
                </Grid>
                </form>
        </Grid>
    )
}
const mapStateToProps=state=>{
    return{
        income:state.income,
        expenses:state.expenses
    }
   
}
const mapDispatchToProps = {
    addIncome:addIncome,
    addExpense:addExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
