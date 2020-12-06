import { Fab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { removeIncome } from '../Models/actions'
import DeleteIcon from '@material-ui/icons/Delete';

function Income({income,removeIncome}) {




    let item=income.map((i,index)=>{
    return  <TableRow key={i.reason}>
                <TableCell className=" text-info">{index+1}</TableCell>
                <TableCell className=" text-info">{i.reason}</TableCell>
                <TableCell className="text-primary">{i.amount}</TableCell>
                <TableCell className="text-danger"> <Fab  ><DeleteIcon onClick={()=>removeIncome(i)} />  </Fab> </TableCell>
            </TableRow>
    })

    return (
        <TableContainer  component="paper">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Index</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   {item}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const mapStateToProps = state =>{
    return {
        income:state.income
    }
}

const mapDispatchToProps = {

    removeIncome:removeIncome

}

export default connect(mapStateToProps,mapDispatchToProps)(Income)
