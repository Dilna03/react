import { TableContainer, TableHead ,Table,TableRow,TableBody,TableCell} from '@mui/material'
import React,{ useState } from 'react'
const Mapping = () => {
    var[name,Setname]= useState(["Tiya","Hidha","Jibin"]
    )
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"20px"}}>
                            Name
                            </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {name.map((value,index)=>{
                        return(<TableRow>
                            <TableCell>{value}</TableCell>
                        </TableRow>)
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Mapping