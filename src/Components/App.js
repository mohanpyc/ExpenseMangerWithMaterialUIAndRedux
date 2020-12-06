import { AppBar, Grid, Paper, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import Expenses from './Expenses'
import Income from './Income'
import Input from './Input'


class App extends React.Component {

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={12}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h1">
                                Expensess Manager
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid container item xs={12} sm={12} lg={12}  >
                    <Grid item xs={0} sm={3} lg={4}>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Paper  >
                            <Typography  variant="h3" color="primary">
                                What's Remaining : ₹ 
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={0} sm={3} lg={4}>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item xs={0} sm={3} lg={3}>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Paper >
                            <Input />
                        </Paper>
                    </Grid>
                    <Grid item xs={0} sm={3} lg={3}>
                    </Grid> 
                </Grid>
                <Grid item>
                    <Paper>
                        <Typography>
                            
                        </Typography>     
                    </Paper>
                </Grid>
                <Grid item container xs={12} sm={12} lg={12}>
                    <Grid item xs={12} sm={6} lg={6} >
                        <Income />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Expenses />
                    </Grid>
                </Grid>
                
            </Grid>         
        )
    }
}
export default App
