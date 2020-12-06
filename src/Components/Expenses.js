import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../Models/actions'
import DeleteIcon from '@material-ui/icons/Delete';
import { Fab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

function Expenses({expenses,removeExpense}) {

    let item=expenses.map((i,index)=>{
    return  <TableRow key={i.reason}>
                <TableCell className="text-info">{index+1}</TableCell>
                <TableCell className="text-info">{i.reason}</TableCell>
                <TableCell className="text-primary">{i.amount}</TableCell>
                <TableCell className="text-danger"> <Fab  > <DeleteIcon onClick={()=>removeExpense(i)}/> </Fab> </TableCell>
            </TableRow>
    })

    return (
        <TableContainer  component="paper">
            <Table>
                <TableHead >
                    <TableRow>
                        <TableCell scope="row">Item</TableCell>
                        <TableCell scope="col">Description</TableCell>
                        <TableCell scope="col">Amount</TableCell>
                        <TableCell scope="col">Action</TableCell>
                    </TableRow>
                </TableHead>            
                <TableBody>
                    {item}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const mapStateToProps = state => {
    return {
        expenses:state.expenses

    }
}

const mapDispatchToProps = {

    removeExpense:removeExpense

}

export default connect(mapStateToProps,mapDispatchToProps)(Expenses);
